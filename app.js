(() => {
  "use strict";

  const STORAGE_KEY = "aifLabProgressV1";
  const tests = [...TESTS].sort((a, b) => a.id - b.id).map((test) => ({
    ...test,
    questions: test.questions.map((question, index) => {
      const shift = (test.id * 3 + index * 5) % question.options.length;
      return {
        ...question,
        options: [...question.options.slice(-shift), ...question.options.slice(0, -shift)],
        answer: (question.answer + shift) % question.options.length,
      };
    }),
  }));
  const optionLetters = ["A", "B", "C", "D", "E"];

  const elements = {
    landing: document.querySelector("#landingView"),
    quiz: document.querySelector("#quizView"),
    results: document.querySelector("#resultsView"),
    footer: document.querySelector("#siteFooter"),
    testGrid: document.querySelector("#testGrid"),
    startFirst: document.querySelector("#startFirstButton"),
    continueButton: document.querySelector("#continueButton"),
    exitQuiz: document.querySelector("#exitQuizButton"),
    quizLabel: document.querySelector("#quizLabel"),
    quizTitle: document.querySelector("#quizTitle"),
    timer: document.querySelector("#timer"),
    progressBar: document.querySelector("#progressBar"),
    answeredCount: document.querySelector("#answeredCount"),
    questionDots: document.querySelector("#questionDots"),
    questionCard: document.querySelector("#questionCard"),
    questionDomain: document.querySelector("#questionDomain"),
    questionText: document.querySelector("#questionText"),
    optionsForm: document.querySelector("#optionsForm"),
    hintButton: document.querySelector("#hintButton"),
    hintText: document.querySelector("#hintText"),
    prevButton: document.querySelector("#prevButton"),
    nextButton: document.querySelector("#nextButton"),
    submitButton: document.querySelector("#submitButton"),
    quizError: document.querySelector("#quizError"),
    resultsHome: document.querySelector("#resultsHomeButton"),
    resultsTitle: document.querySelector("#resultsTitle"),
    resultsSummary: document.querySelector("#resultsSummary"),
    scoreRing: document.querySelector("#scoreRing"),
    scorePercent: document.querySelector("#scorePercent"),
    scoreStatus: document.querySelector("#scoreStatus"),
    scoreLine: document.querySelector("#scoreLine"),
    retryButton: document.querySelector("#retryButton"),
    nextTestButton: document.querySelector("#nextTestButton"),
    reviewList: document.querySelector("#reviewList"),
    reviewEmpty: document.querySelector("#reviewEmpty"),
    dialog: document.querySelector("#infoDialog"),
    dialogTitle: document.querySelector("#dialogTitle"),
    dialogContent: document.querySelector("#dialogContent"),
    dialogClose: document.querySelector("#dialogClose"),
  };

  let store = loadStore();
  let activeTest = null;
  let currentQuestion = 0;
  let timerHandle = null;
  let sessionStartedAt = 0;
  let reviewFilter = "all";

  function loadStore() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return parsed && typeof parsed === "object" ? parsed : { tests: {}, lastActive: null };
    } catch {
      return { tests: {}, lastActive: null };
    }
  }

  function persistStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      showInlineError("İlerleme bu tarayıcıda kaydedilemedi. Teste devam edebilirsin.");
    }
  }

  function progressFor(testId) {
    const test = tests.find((item) => item.id === testId);
    const saved = store.tests[testId];
    if (!saved || !test || !Array.isArray(saved.answers) || saved.answers.length !== test.questions.length) {
      return {
        answers: Array(test?.questions.length || 20).fill(null),
        hints: [],
        current: 0,
        elapsed: 0,
        completed: false,
        score: null,
      };
    }
    return {
      answers: saved.answers,
      hints: Array.isArray(saved.hints) ? saved.hints : [],
      current: Number.isInteger(saved.current) ? saved.current : 0,
      elapsed: Number.isFinite(saved.elapsed) ? saved.elapsed : 0,
      completed: Boolean(saved.completed),
      score: Number.isFinite(saved.score) ? saved.score : null,
    };
  }

  function setProgress(testId, next) {
    store.tests[testId] = next;
    store.lastActive = next.completed ? null : testId;
    persistStore();
  }

  function validateQuestionBank() {
    const valid = tests.length >= 10 && tests.every((test) => {
      return test.questions.length >= 20 && test.questions.every((question) => {
        return question.options.length >= 4 && Number.isInteger(question.answer) && question.options[question.answer];
      });
    });

    if (!valid) {
      elements.testGrid.innerHTML = `
        <div class="inline-error">
          Soru bankası doğrulanamadı. Sayfayı yenileyip tekrar dene.
        </div>`;
      return false;
    }
    return true;
  }

  function renderTestGrid() {
    elements.testGrid.innerHTML = tests.map((test) => {
      const progress = progressFor(test.id);
      const answered = progress.answers.filter((answer) => answer !== null).length;
      const percent = progress.completed ? 100 : Math.round((answered / test.questions.length) * 100);
      const status = progress.completed
        ? `Sonuç ${progress.score}%`
        : answered > 0
          ? `${answered} soru yanıtlandı`
          : "Hazır";
      return `
        <button class="test-card reveal" type="button" data-test-id="${test.id}" aria-label="${test.title} testini aç">
          <span class="test-card-number">TEST ${String(test.id).padStart(2, "0")}</span>
          <span class="test-card-status">${status}</span>
          <h3>${test.title}</h3>
          <p>${test.description}</p>
          <span class="test-card-footer">
            <span>${test.questions.length} soru</span>
            <span class="mini-progress" aria-hidden="true"><i style="width:${percent}%"></i></span>
            <span>${percent}%</span>
          </span>
        </button>`;
    }).join("");

    elements.testGrid.querySelectorAll(".test-card").forEach((card) => {
      card.addEventListener("click", () => openTest(Number(card.dataset.testId)));
    });
    observeReveals();
    updateContinueButton();
  }

  function updateContinueButton() {
    const activeId = Number(store.lastActive);
    const hasActive = tests.some((test) => test.id === activeId) && !progressFor(activeId).completed;
    elements.continueButton.hidden = !hasActive;
    elements.continueButton.dataset.testId = hasActive ? String(activeId) : "";
  }

  function showView(view) {
    elements.landing.hidden = view !== "landing";
    elements.quiz.hidden = view !== "quiz";
    elements.results.hidden = view !== "results";
    elements.footer.hidden = view !== "landing";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openTest(testId, forceRestart = false) {
    activeTest = tests.find((test) => test.id === testId);
    if (!activeTest) return;

    const progress = progressFor(testId);
    if (progress.completed && !forceRestart) {
      showResults(testId);
      return;
    }

    if (forceRestart) {
      setProgress(testId, {
        answers: Array(activeTest.questions.length).fill(null),
        hints: [],
        current: 0,
        elapsed: 0,
        completed: false,
        score: null,
      });
    }

    const currentProgress = progressFor(testId);
    currentQuestion = Math.min(currentProgress.current, activeTest.questions.length - 1);
    elements.quizLabel.textContent = `TEST ${String(activeTest.id).padStart(2, "0")}`;
    elements.quizTitle.textContent = activeTest.title;
    buildQuestionDots();
    renderQuestion();
    startTimer();
    showView("quiz");
    document.title = `${activeTest.title} | AIF Lab`;
  }

  function buildQuestionDots() {
    elements.questionDots.innerHTML = activeTest.questions.map((_, index) => {
      return `<button class="question-dot" type="button" data-question="${index}" aria-label="${index + 1}. soruya git">${index + 1}</button>`;
    }).join("");
    elements.questionDots.querySelectorAll(".question-dot").forEach((button) => {
      button.addEventListener("click", () => goToQuestion(Number(button.dataset.question)));
    });
  }

  function renderQuestion() {
    const question = activeTest.questions[currentQuestion];
    const progress = progressFor(activeTest.id);
    const selected = progress.answers[currentQuestion];
    const hintOpen = progress.hints.includes(currentQuestion);

    elements.questionDomain.textContent = question.domain.toUpperCase();
    elements.questionText.textContent = question.text;
    elements.optionsForm.innerHTML = question.options.map((option, index) => `
      <label class="option-label ${selected === index ? "is-selected" : ""}">
        <input type="radio" name="answer" value="${index}" ${selected === index ? "checked" : ""} />
        <span class="option-key">${optionLetters[index]}</span>
        <span class="option-copy">${option}</span>
      </label>
    `).join("");

    elements.optionsForm.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => selectAnswer(Number(input.value)));
    });

    elements.hintText.textContent = question.hint;
    elements.hintText.hidden = !hintOpen;
    elements.hintButton.setAttribute("aria-expanded", String(hintOpen));
    elements.hintButton.innerHTML = hintOpen
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg> İpucunu kapat`
      : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 21h6M10 17h4M8.5 14.5A7 7 0 1 1 15.5 14.5C14.5 15.2 14 16 14 17h-4c0-1-.5-1.8-1.5-2.5Z"/></svg> İpucu al`;

    elements.prevButton.disabled = currentQuestion === 0;
    elements.nextButton.hidden = currentQuestion === activeTest.questions.length - 1;
    elements.submitButton.hidden = currentQuestion !== activeTest.questions.length - 1;
    elements.progressBar.style.width = `${((currentQuestion + 1) / activeTest.questions.length) * 100}%`;
    elements.quizError.hidden = true;
    updateQuestionDots();
  }

  function updateQuestionDots() {
    const progress = progressFor(activeTest.id);
    const answered = progress.answers.filter((answer) => answer !== null).length;
    elements.answeredCount.textContent = `${answered} / ${activeTest.questions.length}`;
    elements.questionDots.querySelectorAll(".question-dot").forEach((dot, index) => {
      dot.classList.toggle("is-current", index === currentQuestion);
      dot.classList.toggle("is-answered", progress.answers[index] !== null && index !== currentQuestion);
      dot.setAttribute("aria-current", index === currentQuestion ? "step" : "false");
    });
  }

  function selectAnswer(answer) {
    const progress = progressFor(activeTest.id);
    progress.answers[currentQuestion] = answer;
    progress.current = currentQuestion;
    commitElapsed(progress);
    setProgress(activeTest.id, progress);
    elements.optionsForm.querySelectorAll(".option-label").forEach((label, index) => {
      label.classList.toggle("is-selected", index === answer);
    });
    elements.quizError.hidden = true;
    updateQuestionDots();
  }

  function toggleHint() {
    const progress = progressFor(activeTest.id);
    const hintIndex = progress.hints.indexOf(currentQuestion);
    if (hintIndex >= 0) progress.hints.splice(hintIndex, 1);
    else progress.hints.push(currentQuestion);
    commitElapsed(progress);
    setProgress(activeTest.id, progress);
    renderQuestion();
  }

  function goToQuestion(index) {
    if (index < 0 || index >= activeTest.questions.length || index === currentQuestion) return;
    const progress = progressFor(activeTest.id);
    progress.current = index;
    commitElapsed(progress);
    setProgress(activeTest.id, progress);
    elements.questionCard.classList.add("is-changing");
    window.setTimeout(() => {
      currentQuestion = index;
      renderQuestion();
      elements.questionCard.classList.remove("is-changing");
      elements.questionText.focus?.();
    }, 160);
  }

  function showInlineError(message) {
    elements.quizError.textContent = message;
    elements.quizError.hidden = false;
  }

  function submitTest() {
    const progress = progressFor(activeTest.id);
    const firstMissing = progress.answers.findIndex((answer) => answer === null);
    if (firstMissing >= 0) {
      const missingCount = progress.answers.filter((answer) => answer === null).length;
      showInlineError(`${missingCount} soru henüz yanıtlanmadı. İlk boş soruya yönlendiriliyorsun.`);
      window.setTimeout(() => goToQuestion(firstMissing), 900);
      return;
    }

    commitElapsed(progress);
    stopTimer();
    const correct = activeTest.questions.reduce((total, question, index) => {
      return total + (progress.answers[index] === question.answer ? 1 : 0);
    }, 0);
    progress.current = currentQuestion;
    progress.completed = true;
    progress.score = Math.round((correct / activeTest.questions.length) * 100);
    setProgress(activeTest.id, progress);
    showResults(activeTest.id);
  }

  function startTimer() {
    stopTimer();
    sessionStartedAt = Date.now();
    renderTimer();
    timerHandle = window.setInterval(renderTimer, 1000);
  }

  function stopTimer() {
    if (timerHandle) window.clearInterval(timerHandle);
    timerHandle = null;
  }

  function elapsedSeconds() {
    if (!activeTest) return 0;
    const saved = progressFor(activeTest.id).elapsed;
    if (!sessionStartedAt || !timerHandle) return saved;
    return saved + Math.floor((Date.now() - sessionStartedAt) / 1000);
  }

  function commitElapsed(progress) {
    progress.elapsed = elapsedSeconds();
    sessionStartedAt = Date.now();
  }

  function renderTimer() {
    const total = elapsedSeconds();
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    elements.timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function saveAndExit() {
    if (activeTest) {
      const progress = progressFor(activeTest.id);
      progress.current = currentQuestion;
      commitElapsed(progress);
      setProgress(activeTest.id, progress);
    }
    stopTimer();
    sessionStartedAt = 0;
    activeTest = null;
    renderTestGrid();
    showView("landing");
    document.title = "AIF Lab | AWS AI Practitioner deneme sınavları";
  }

  function showResults(testId) {
    stopTimer();
    activeTest = tests.find((test) => test.id === testId);
    if (!activeTest) return;
    const progress = progressFor(testId);
    if (!progress.completed) {
      openTest(testId);
      return;
    }

    const correct = activeTest.questions.reduce((total, question, index) => {
      return total + (progress.answers[index] === question.answer ? 1 : 0);
    }, 0);
    const wrong = activeTest.questions.length - correct;
    const passed = progress.score >= 70;
    const minutes = Math.floor(progress.elapsed / 60);
    const seconds = progress.elapsed % 60;

    elements.resultsTitle.textContent = passed ? "Hedefi geçtin." : "Tekrarla, daha da güçlen.";
    elements.resultsSummary.textContent = `${activeTest.title} testini ${minutes} dakika ${seconds} saniyede tamamladın.`;
    elements.scorePercent.textContent = `${progress.score}%`;
    elements.scoreRing.style.setProperty("--score", `${progress.score * 3.6}deg`);
    elements.scoreStatus.textContent = passed ? "HEDEF AŞILDI" : "TEKRAR ÖNERİLİR";
    elements.scoreStatus.style.color = passed ? "var(--good)" : "var(--bad)";
    elements.scoreLine.textContent = `${correct} doğru, ${wrong} yanlış`;
    elements.nextTestButton.hidden = activeTest.id === tests[tests.length - 1].id;
    reviewFilter = "all";
    document.querySelectorAll(".filter-button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === "all");
    });
    renderReview();
    renderTestGrid();
    showView("results");
    document.title = `${progress.score}% sonuç | ${activeTest.title}`;
  }

  function renderReview() {
    const progress = progressFor(activeTest.id);
    const items = activeTest.questions.map((question, index) => {
      const isCorrect = progress.answers[index] === question.answer;
      return { question, index, isCorrect, selected: progress.answers[index] };
    }).filter((item) => {
      if (reviewFilter === "correct") return item.isCorrect;
      if (reviewFilter === "wrong") return !item.isCorrect;
      return true;
    });

    elements.reviewEmpty.hidden = items.length > 0;
    elements.reviewList.innerHTML = items.map(({ question, index, isCorrect, selected }) => {
      const selectedText = selected === null ? "Yanıt verilmedi" : `${optionLetters[selected]}. ${question.options[selected]}`;
      const correctText = `${optionLetters[question.answer]}. ${question.options[question.answer]}`;
      return `
        <article class="review-card ${isCorrect ? "is-correct" : "is-wrong"}">
          <div class="review-card-head">
            <span>SORU ${String(index + 1).padStart(2, "0")}</span>
            <span class="review-state">${isCorrect ? "DOĞRU" : "YANLIŞ"}</span>
          </div>
          <h3>${question.text}</h3>
          <div class="answer-row ${isCorrect ? "" : "user-wrong"}">
            <span>Senin yanıtın</span><span>${selectedText}</span>
          </div>
          <div class="answer-row correct-answer">
            <span>Doğru yanıt</span><span>${correctText}</span>
          </div>
          <p class="explanation"><strong>Neden?</strong> ${question.explanation}</p>
        </article>`;
    }).join("");
  }

  function splitTagline() {
    const target = document.querySelector("#taglineText");
    const lines = target.innerHTML.split("<br>");
    target.innerHTML = lines.map((line, lineIndex) => {
      const words = line.trim().split(/\s+/).map((word) => `<span class="word">${word}</span>`).join(" ");
      return `${lineIndex ? "<br>" : ""}${words}`;
    }).join("");

    const wordObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { rootMargin: "0px 0px -28% 0px", threshold: 0.4 });

    target.querySelectorAll(".word").forEach((word, index) => {
      word.style.transitionDelay = `${index * 70}ms`;
      wordObserver.observe(word);
    });
  }

  function observeReveals() {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
  }

  function openInfoDialog(type) {
    if (type === "privacy") {
      elements.dialogTitle.textContent = "Gizlilik";
      elements.dialogContent.innerHTML = `
        <p>Bu sayfa hesap oluşturmaz ve kişisel veri toplamaz. Test ilerlemen yalnızca kullandığın tarayıcının yerel depolama alanında tutulur.</p>
        <p>İlerlemeyi kaldırmak istersen tarayıcı site verilerini temizleyebilirsin.</p>`;
    } else {
      elements.dialogTitle.textContent = "Kullanım koşulları";
      elements.dialogContent.innerHTML = `
        <p>Bu araç yalnızca eğitim amaçlıdır. Sorular özgündür ve gerçek AWS sınav soruları değildir.</p>
        <p>AWS ve ilgili hizmet adları Amazon.com, Inc. veya bağlı kuruluşlarının ticari markalarıdır. Bu çalışma AWS tarafından onaylanmamıştır.</p>`;
    }
    elements.dialog.showModal();
  }

  elements.startFirst.addEventListener("click", () => openTest(1));
  elements.continueButton.addEventListener("click", () => openTest(Number(elements.continueButton.dataset.testId)));
  elements.exitQuiz.addEventListener("click", saveAndExit);
  elements.prevButton.addEventListener("click", () => goToQuestion(currentQuestion - 1));
  elements.nextButton.addEventListener("click", () => goToQuestion(currentQuestion + 1));
  elements.submitButton.addEventListener("click", submitTest);
  elements.hintButton.addEventListener("click", toggleHint);
  elements.resultsHome.addEventListener("click", saveAndExit);
  elements.retryButton.addEventListener("click", () => openTest(activeTest.id, true));
  elements.nextTestButton.addEventListener("click", () => openTest(activeTest.id + 1));
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      reviewFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderReview();
    });
  });
  document.querySelectorAll(".footer-link").forEach((button) => button.addEventListener("click", () => openInfoDialog(button.dataset.modal)));
  elements.dialogClose.addEventListener("click", () => elements.dialog.close());
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
  document.querySelector(".nav-link").addEventListener("click", (event) => {
    if (elements.landing.hidden) {
      event.preventDefault();
      saveAndExit();
      window.setTimeout(() => document.querySelector("#tests").scrollIntoView({ behavior: "smooth" }), 0);
    }
  });
  document.querySelector(".brand").addEventListener("click", (event) => {
    if (elements.landing.hidden) {
      event.preventDefault();
      saveAndExit();
    }
  });
  window.addEventListener("beforeunload", () => {
    if (activeTest && !elements.quiz.hidden) {
      const progress = progressFor(activeTest.id);
      progress.current = currentQuestion;
      commitElapsed(progress);
      setProgress(activeTest.id, progress);
    }
  });

  if (validateQuestionBank()) renderTestGrid();
  splitTagline();
  observeReveals();
})();
