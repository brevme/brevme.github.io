const q = (text, options, answer, hint, explanation, domain) => ({
  text,
  options,
  answer,
  hint,
  explanation,
  domain,
});

const TESTS = [
  {
    id: 1,
    title: "AI ve ML temelleri",
    description: "Temel kavramlar, öğrenme türleri, model yaşam döngüsü ve değerlendirme ölçütleri.",
    domain: "AI VE ML TEMELLERİ",
    questions: [
      q(
        "Yapay zeka ile makine öğrenmesi arasındaki ilişki en doğru nasıl açıklanır?",
        ["Makine öğrenmesi yapay zekanın bir alt alanıdır", "Yapay zeka makine öğrenmesinin bir alt alanıdır", "İki kavram tamamen aynıdır", "Makine öğrenmesi yalnızca robotlarda kullanılır"],
        0,
        "Daha geniş olan kavramı düşün.",
        "Yapay zeka, makinelerin insan benzeri görevleri yapmasını hedefleyen geniş alandır. Makine öğrenmesi ise verilerden örüntü öğrenen yapay zeka yaklaşımıdır.",
        "AI ve ML temelleri"
      ),
      q(
        "Etiketli geçmiş işlemler kullanılarak yeni bir işlemin sahte olup olmadığını tahmin eden model hangi öğrenme türünü kullanır?",
        ["Denetimli öğrenme", "Denetimsiz öğrenme", "Pekiştirmeli öğrenme", "Kural tabanlı sıkıştırma"],
        0,
        "Eğitim örneklerinde beklenen cevap zaten bulunuyor.",
        "Etiketli örneklerden girdi ile doğru sonuç arasındaki ilişkiyi öğrenmek denetimli öğrenmedir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir perakendeci, müşteri gruplarını önceden tanımlı etiketler olmadan keşfetmek istiyor. En uygun yaklaşım hangisidir?",
        ["Kümeleme", "Regresyon", "İkili sınıflandırma", "Pekiştirmeli öğrenme"],
        0,
        "Amaç benzer kayıtları doğal gruplara ayırmak.",
        "Kümeleme, etiketlenmemiş verilerde benzer örnekleri gruplandıran denetimsiz öğrenme yöntemidir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir evin metrekare, konum ve oda sayısına göre satış fiyatını tahmin etmek hangi problem türüdür?",
        ["Regresyon", "Sınıflandırma", "Kümeleme", "Boyut indirgeme"],
        0,
        "Çıktı sürekli sayısal bir değerdir.",
        "Fiyat gibi sürekli sayısal değerlerin tahmini regresyon problemidir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir e postanın spam ya da normal olarak belirlenmesi hangi problem türüdür?",
        ["Sınıflandırma", "Regresyon", "Kümeleme", "Üretken modelleme"],
        0,
        "Model sınırlı sayıdaki kategoriden birini seçer.",
        "Spam ve normal gibi ayrık etiketlerden birini tahmin etmek sınıflandırmadır.",
        "AI ve ML temelleri"
      ),
      q(
        "Derin öğrenmenin geleneksel makine öğrenmesinden temel farkı nedir?",
        ["Çok katmanlı sinir ağlarından yararlanması", "Hiç veri gerektirmemesi", "Yalnızca tablo verisiyle çalışması", "Her zaman açıklanabilir olması"],
        0,
        "Adındaki derinlik, ağın yapısına gönderme yapar.",
        "Derin öğrenme, karmaşık örüntüleri öğrenmek için çok katmanlı yapay sinir ağlarını kullanır.",
        "AI ve ML temelleri"
      ),
      q(
        "Müşteri yorumlarının olumlu veya olumsuz olduğunu belirlemek öncelikle hangi AI alanına girer?",
        ["Doğal dil işleme", "Bilgisayarlı görü", "Robotik", "Zaman serisi sıkıştırma"],
        0,
        "Girdi insan dilidir.",
        "Metin anlamlandırma ve duygu analizi doğal dil işlemenin tipik kullanım alanlarıdır.",
        "AI ve ML temelleri"
      ),
      q(
        "Üretim hattındaki ürün fotoğraflarında çatlak tespit etmek hangi AI alanına örnektir?",
        ["Bilgisayarlı görü", "Doğal dil işleme", "Konuşma sentezi", "Öneri sistemi"],
        0,
        "Model görsel girdiyi inceler.",
        "Görüntülerden nesne, kusur veya özellik tespit etmek bilgisayarlı görü kapsamındadır.",
        "AI ve ML temelleri"
      ),
      q(
        "Eğitim ve çıkarım arasındaki fark nedir?",
        ["Eğitim model parametrelerini öğrenir, çıkarım eğitilmiş modeli yeni girdide kullanır", "Eğitim yalnızca veri toplar, çıkarım veriyi siler", "Çıkarım modeli eğitir, eğitim tahmin üretir", "Aralarında işlevsel fark yoktur"],
        0,
        "Önce öğrenme, sonra uygulama sırasını düşün.",
        "Eğitim sırasında model veriden örüntü ve parametre öğrenir. Çıkarım sırasında bu öğrenilmiş model yeni veri için çıktı üretir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir model eğitim verisinde çok başarılı, yeni veride ise belirgin biçimde başarısızdır. Bu durum nedir?",
        ["Aşırı öğrenme", "Eksik öğrenme", "Veri şifreleme", "Boyut indirgeme"],
        0,
        "Model eğitim örneklerini genellemek yerine ezberlemiş olabilir.",
        "Aşırı öğrenme, modelin eğitim verisine fazla uyum sağlayıp görülmemiş veride zayıf performans göstermesidir.",
        "AI ve ML temelleri"
      ),
      q(
        "Hem eğitim hem de test verisinde düşük başarı gösteren aşırı basit bir modelde en olası sorun nedir?",
        ["Eksik öğrenme", "Aşırı öğrenme", "Veri sızıntısı", "Yüksek doğruluk"],
        0,
        "Model verideki temel ilişkiyi bile yakalayamıyor.",
        "Eksik öğrenme, modelin örüntüleri öğrenemeyecek kadar basit veya yetersiz olmasıdır.",
        "AI ve ML temelleri"
      ),
      q(
        "Doğrulama veri kümesinin temel amacı nedir?",
        ["Model ve ayar seçimlerini değerlendirmek", "Son kullanıcı tahminlerini saklamak", "Eğitim verisini şifrelemek", "Nihai tarafsız ölçümü gizlemek"],
        0,
        "Bu küme eğitim ile nihai test arasında kullanılır.",
        "Doğrulama kümesi model seçimi ve ayar kararlarında kullanılır. Test kümesi ise nihai ve tarafsız değerlendirme içindir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir kredi riski modelinde müşterinin geliri nedir, geri ödeme yapıp yapmadığı nedir?",
        ["Gelir özellik, geri ödeme durumu etikettir", "Gelir etiket, geri ödeme durumu özelliktir", "İkisi de etikettir", "İkisi de model parametresidir"],
        0,
        "Özellik girdidir, etiket öğrenilmek istenen sonuçtur.",
        "Gelir modele verilen bir özelliktir. Geri ödeme durumu tahmin edilen hedef yani etikettir.",
        "AI ve ML temelleri"
      ),
      q(
        "Gerçekte normal olan bir işlemin model tarafından sahte olarak işaretlenmesi nedir?",
        ["Yanlış pozitif", "Yanlış negatif", "Doğru pozitif", "Doğru negatif"],
        0,
        "Model pozitif dedi ama gerçek durum negatiftir.",
        "Olmayan bir durumu varmış gibi işaretlemek yanlış pozitiftir.",
        "AI ve ML temelleri"
      ),
      q(
        "Yanlış alarm maliyetinin çok yüksek olduğu bir sistemde hangi ölçüt özellikle önemlidir?",
        ["Kesinlik", "Duyarlılık", "Eğitim süresi", "Küme sayısı"],
        0,
        "Pozitif tahminlerin ne kadarının gerçekten pozitif olduğuna bak.",
        "Kesinlik, pozitif tahminlerin ne kadarının doğru olduğunu ölçer ve yanlış pozitiflerin azaltılmasına odaklanır.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir hastalığı taşıyan vakaları kaçırmamak en önemli hedefse hangi ölçüt öncelik kazanır?",
        ["Duyarlılık", "Kesinlik", "Ortalama karesel hata", "Silüet skoru"],
        0,
        "Gerçek pozitiflerin ne kadarını yakaladığını ölçen değeri düşün.",
        "Duyarlılık, gerçek pozitif vakaların ne kadarının doğru tespit edildiğini ölçer ve yanlış negatifleri azaltmaya odaklanır.",
        "AI ve ML temelleri"
      ),
      q(
        "F1 skoru hangi iki ölçüt arasında denge kurar?",
        ["Kesinlik ve duyarlılık", "Doğruluk ve gecikme", "Maliyet ve hız", "Eğitim ve çıkarım"],
        0,
        "Özellikle dengesiz sınıflarda birlikte değerlendirilen ikiliyi düşün.",
        "F1 skoru kesinlik ile duyarlılığın harmonik ortalamasıdır.",
        "AI ve ML temelleri"
      ),
      q(
        "Kümeleme sonucunda oluşan gruplar için hangisi doğrudur?",
        ["Gruplar verideki benzerliklerden keşfedilir", "Her grubun etiketi eğitimden önce verilmelidir", "Çıktı her zaman tek bir sayıdır", "Yalnızca görüntülerde kullanılabilir"],
        0,
        "Bu yöntem etiket gerektirmez.",
        "Kümeleme, önceden verilmiş hedef etiket olmadan benzer veri noktalarını gruplar.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir alışveriş sitesinin geçmiş davranışlara göre ürün önermesi hangi kullanım alanıdır?",
        ["Kişiselleştirilmiş öneri", "Optik karakter tanıma", "Konuşma sentezi", "Anomali şifreleme"],
        0,
        "Amaç her kullanıcıya ilgisine uygun içerik göstermektir.",
        "Öneri sistemleri kullanıcı davranışlarından ilgi örüntülerini öğrenerek kişiselleştirilmiş içerik sunar.",
        "AI ve ML temelleri"
      ),
      q(
        "Sensör ölçümlerindeki alışılmadık davranışları belirlemek için en uygun AI kullanım alanı hangisidir?",
        ["Anomali tespiti", "Metin özetleme", "Konuşma sentezi", "Makine çevirisi"],
        0,
        "Aranan şey normal örüntüden sapmadır.",
        "Anomali tespiti, normal davranıştan belirgin biçimde ayrılan gözlemleri bulmak için kullanılır.",
        "AI ve ML temelleri"
      ),
    ],
  },
  {
    id: 9,
    title: "Senaryo laboratuvarı",
    description: "İş gereksinimini doğru AI yaklaşımı ve AWS servisiyle eşleştiren uygulamalı sorular.",
    domain: "UYGULAMA SENARYOLARI",
    questions: [
      q(
        "Bir sigorta şirketi, hasar formlarındaki alanları ve tabloları çıkarıp inceleme sistemine aktarmak istiyor. En uygun servis hangisidir?",
        ["Amazon Textract", "Amazon Polly", "Amazon Personalize", "Amazon Translate"],
        0,
        "Girdi yapılandırılmış ve yarı yapılandırılmış belgelerdir.",
        "Textract, belgelerden basılı ve el yazısı metin yanında form anahtar değerlerini ve tabloları çıkarabilir.",
        "Servis seçimi"
      ),
      q(
        "Küresel bir destek ekibi, müşterilerin farklı dillerdeki mesajlarını temsilcinin diline çevirmek istiyor. En doğrudan çözüm hangisidir?",
        ["Amazon Translate", "Amazon Rekognition", "Amazon Macie", "Amazon Redshift"],
        0,
        "Metni bir dilden diğerine çevirmek gerekiyor.",
        "Amazon Translate, çok dilli metinleri destek ekibinin tercih ettiği dile otomatik çevirmek için tasarlanmıştır.",
        "Servis seçimi"
      ),
      q(
        "Bir banka, kredi kararlarını etkileyen modelin her demografik grupta benzer çalışıp çalışmadığını görmek istiyor. Ne yapmalıdır?",
        ["Performans ve hata oranlarını gruplara göre ayrı ölçmelidir", "Yalnızca genel doğruluğa bakmalıdır", "Modelin adını değiştirmelidir", "Daha uzun istem yazmalıdır"],
        0,
        "Toplam ortalama bazı gruplardaki sorunu gizleyebilir.",
        "Ayrıştırılmış değerlendirme, farklı gruplardaki doğruluk, yanlış pozitif ve yanlış negatif farklarını görünür kılar.",
        "Sorumlu AI"
      ),
      q(
        "Bir şirket çalışan el kitabını yanıtlayan asistan istiyor. Belgeler her ay değişiyor ve yanıtların kaynak göstermesi gerekiyor. En uygun yaklaşım hangisidir?",
        ["Bedrock Knowledge Bases ile RAG", "Her ay temel modeli sıfırdan eğitmek", "Yalnızca yüksek temperature kullanmak", "Amazon Polly ile ses üretmek"],
        0,
        "Güncel kurumsal bilgi ve kaynak atfı birlikte isteniyor.",
        "RAG, güncel belge parçalarını getirip yanıtı bunlarla temellendirir ve kaynak gösterimini destekler.",
        "RAG"
      ),
      q(
        "Bir çağrı merkezi, görüşmeleri yazıya çevirdikten sonra müşteri duygusunu çıkarmak istiyor. Doğru servis sırası hangisidir?",
        ["Amazon Transcribe, ardından Amazon Comprehend", "Amazon Polly, ardından Amazon Rekognition", "Amazon Textract, ardından Amazon Translate", "Amazon Personalize, ardından AWS Artifact"],
        0,
        "Önce ses metne dönüşür, sonra metin analiz edilir.",
        "Transcribe konuşmayı metne dönüştürür. Comprehend bu metin üzerinde duygu analizi yapar.",
        "Servis seçimi"
      ),
      q(
        "Bir e ticaret sitesi, her müşteriye geçmiş tıklama ve satın alma davranışına göre ürün göstermek istiyor. En uygun servis hangisidir?",
        ["Amazon Personalize", "Amazon Textract", "Amazon Polly", "AWS CloudTrail"],
        0,
        "Kişiye özel sıralama ve öneri gerekir.",
        "Amazon Personalize, kullanıcı etkileşimlerinden kişiselleştirilmiş ürün veya içerik önerileri üretir.",
        "Servis seçimi"
      ),
      q(
        "Bir hukuk asistanı yalnızca onaylanmış sözleşmelere dayanarak yanıt vermeli ve cevap bulunamadığında bunu söylemelidir. En iyi çözüm hangisidir?",
        ["RAG, kaynak filtresi ve güvenli geri çekilme talimatı", "Sınırsız yaratıcı üretim", "Yalnızca model boyutunu artırmak", "Kaynak belgeleri istemden kaldırmak"],
        0,
        "Yanıtı güvenilir kaynaklarla sınırlandır ve bilinmeyeni kabul et.",
        "Onaylı kaynaklarda arama, meta veri filtresi ve kaynakta yanıt yoksa geri çekilme talimatı temelsiz iddia riskini azaltır.",
        "RAG"
      ),
      q(
        "Pazarlama ekibi çok sayıda yaratıcı slogan varyasyonu istiyor. Hangi çıkarım ayarı ölçülü biçimde artırılabilir?",
        ["Temperature", "IAM izin sayısı", "S3 saklama süresi", "KMS anahtar boyutu"],
        0,
        "Token seçimindeki çeşitliliği kontrol eden ayardır.",
        "Daha yüksek temperature yaratıcı görevlerde çeşitliliği artırabilir. Çıktılar marka ve güvenlik kurallarıyla yine değerlendirilmelidir.",
        "Çıkarım ayarları"
      ),
      q(
        "Bir finans uygulaması para iadesi yapabilen bir ajan kullanıyor. En önemli ek kontrol hangisidir?",
        ["İade öncesi insan onayı ve tutar sınırı", "Ajana hesap genelinde yönetici rolü", "Sonsuz yeniden deneme", "Denetim günlüklerini kapatma"],
        0,
        "Eylem maddi etki yaratıyor ve geri alınması zor olabilir.",
        "İnsan onayı, işlem sınırı ve en az yetki yüksek etkili ajan eylemlerinin riskini azaltır.",
        "Ajan güvenliği"
      ),
      q(
        "Bir hastane, notları özetlemeden önce kişisel bilgileri çıkarmak istiyor. İlk yapılması gereken nedir?",
        ["Gereksiz kişisel bilgileri maskelemek veya redakte etmek", "Veriyi herkese açık S3 bucket'a koymak", "Tüm notları süresiz saklamak", "Modele yönetici izni vermek"],
        0,
        "Model çağrısına yalnızca gerekli veriyi gönder.",
        "Veri minimizasyonu ve redaksiyon, hassas sağlık verisinin gereksiz işlenmesini ve ifşa riskini azaltır.",
        "Veri koruma"
      ),
      q(
        "Bir fabrika, kamera görüntülerinden hatalı ürünleri otomatik işaretlemek istiyor. Başlangıç için en uygun servis hangisidir?",
        ["Amazon Rekognition", "Amazon Translate", "Amazon Comprehend", "AWS Artifact"],
        0,
        "Girdi görüntü, görev görsel analizdir.",
        "Rekognition görüntü analizi yetenekleri sunar. Çok özel kusurlar için özel model gereksinimi ayrıca değerlendirilmelidir.",
        "Servis seçimi"
      ),
      q(
        "Bir ekip, işine en uygun temel modeli seçmek istiyor. İlk karşılaştırma nasıl yapılmalıdır?",
        ["Temsilî görevlerde kalite, gecikme, maliyet ve güvenliği ölçerek", "Yalnızca parametre sayısına bakarak", "En yeni modeli doğrudan seçerek", "Model adını rastgele seçerek"],
        0,
        "Gerçek iş gereksinimleri birden fazla ölçüt içerir.",
        "Temsilî veriyle çok boyutlu değerlendirme, en büyük veya popüler model yerine ihtiyaca en uygun modeli seçmeyi sağlar.",
        "Model değerlendirme"
      ),
      q(
        "Bir özetleme uygulaması beklenenden pahalı çalışıyor. Kaliteyi koruyarak ilk hangi optimizasyon denenmelidir?",
        ["Gereksiz istem bağlamını ve çıktı uzunluğunu azaltmak", "Her isteğe aynı belgeyi birkaç kez eklemek", "Daha fazla yönetici rolü oluşturmak", "Tüm yanıtları maksimum uzunlukta üretmek"],
        0,
        "Ücretlendirmenin işlenen token miktarıyla ilişkisini düşün.",
        "İlgisiz bağlamı kaldırmak ve yeterli çıktı sınırı koymak, işlenen token miktarını ve maliyeti azaltabilir.",
        "Maliyet"
      ),
      q(
        "Bir müşteri botu sık sık şirket politikası uyduruyor. En etkili iyileştirme hangisidir?",
        ["Onaylı politika belgeleriyle RAG ve kaynak doğrulama kullanmak", "Temperature değerini en yükseğe çıkarmak", "Tüm güvenlik kontrollerini kaldırmak", "Yanıtları daha uzun istemek"],
        0,
        "Yanıtı doğrulanmış kurumsal bilgiye bağla.",
        "RAG ve kaynak doğrulama, modelin onaylı politikalara dayanmasını sağlar ve halüsinasyon riskini azaltır.",
        "RAG"
      ),
      q(
        "Bir veri bilim ekibi özel tahmin modeli geliştirip uçtan uca yaşam döngüsünü yönetmek istiyor. Hangi servis uygundur?",
        ["Amazon SageMaker AI", "Amazon Polly", "Amazon Translate", "AWS Artifact"],
        0,
        "Hazır amaçlı bir API değil, özel ML platformu gerekiyor.",
        "SageMaker AI özel modellerin veri hazırlama, eğitim, değerlendirme ve dağıtım yaşam döngüsünü destekler.",
        "Servis seçimi"
      ),
      q(
        "Bir denetçi, AWS hizmetlerine ait bağımsız uyumluluk raporlarını istiyor. Hangi servis kullanılmalıdır?",
        ["AWS Artifact", "Amazon Lex", "Amazon Personalize", "AWS Lambda"],
        0,
        "AWS uyumluluk belgeleri portalını düşün.",
        "AWS Artifact, denetim ve uyumluluk için AWS raporlarına ve belirli anlaşmalara erişim sağlar.",
        "Uyumluluk"
      ),
      q(
        "Bir asistanın yanıt kalitesi dağıtımdan birkaç ay sonra düştü. En olası açıklama ve eylem hangisidir?",
        ["Veri veya kullanım kayması olabilir; üretim örnekleriyle yeniden değerlendirilmelidir", "Model mutlaka bozulmuştur; tüm günlükler silinmelidir", "Kullanıcılar azaltılmalıdır", "IAM politikaları herkese açılmalıdır"],
        0,
        "Gerçek dünya verisinin zamanla değişebildiğini düşün.",
        "Veri ve kullanıcı beklentileri zamanla kayabilir. İzleme, hata analizi ve güncellenmiş değerlendirme veri kümesi sorunu ortaya çıkarır.",
        "Yaşam döngüsü"
      ),
      q(
        "Bir müşteri hizmetleri botunun marka tonunu tutarlı kullanması gerekiyor. En düşük maliyetli ilk adım hangisidir?",
        ["Açık sistem istemi ve birkaç iyi yanıt örneği kullanmak", "Hemen temel modeli sıfırdan eğitmek", "Bütün belgeleri silmek", "Her kullanıcıya farklı rastgele talimat vermek"],
        0,
        "Önce istem mühendisliğiyle davranışı yönlendirmeyi dene.",
        "Rol, ton kuralları ve few shot örnekleri çoğu durumda model eğitmeden tutarlı üslup sağlayan iyi bir ilk adımdır.",
        "İstem mühendisliği"
      ),
      q(
        "Bir ajan yalnızca sipariş durumunu okumalı, değiştirmemelidir. IAM politikası nasıl olmalıdır?",
        ["Yalnızca gerekli okuma eylemlerine izin vermelidir", "Tüm yazma ve silme eylemlerine izin vermelidir", "Yönetici erişimi vermelidir", "Kimlik doğrulama istememelidir"],
        0,
        "İzinleri işlevin gerektirdiği eylemlerle sınırla.",
        "En az yetki kapsamında ajan yalnızca sipariş durumunu okumak için gereken kaynak ve API eylemlerine erişmelidir.",
        "Güvenlik"
      ),
      q(
        "Bir ürün ekibi AI özelliğinin başarılı olup olmadığını anlamak istiyor. En iyi ölçüm planı hangisidir?",
        ["İş sonucu, kalite, gecikme, maliyet ve risk ölçütlerini birlikte izlemek", "Sadece modelin adıyla karar vermek", "Yalnızca üretilen token sayısını artırmak", "Kullanıcı geri bildirimini görmezden gelmek"],
        0,
        "Teknik kalite ile iş değerini birlikte düşün.",
        "Başarı, görev tamamlama veya zaman tasarrufu gibi iş hedefleriyle birlikte kalite, kullanıcı deneyimi, maliyet ve güvenlik göstergeleriyle ölçülmelidir.",
        "İş değeri"
      ),
    ],
  },
  {
    id: 10,
    title: "Tam kapsamlı prova",
    description: "Beş sınav alanından dengeli, karışık ve senaryo ağırlıklı son tekrar.",
    domain: "KARMA PROVA",
    questions: [
      q(
        "Etiketsiz destek kayıtlarını konu benzerliğine göre gruplamak için hangi yöntem kullanılmalıdır?",
        ["Kümeleme", "Regresyon", "Denetimli sınıflandırma", "Konuşma sentezi"],
        0,
        "Önceden tanımlı konu etiketleri yoktur.",
        "Kümeleme, etiketsiz örnekleri benzerliklerine göre doğal gruplara ayıran denetimsiz öğrenme yöntemidir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bir sahtekarlık modelinde kaçırılan sahte işlem sayısını azaltmak için öncelikle hangi ölçüt iyileştirilmelidir?",
        ["Duyarlılık", "Kesinlik", "Eğitim süresi", "Küme sayısı"],
        0,
        "Yanlış negatifleri azaltmak hedefleniyor.",
        "Duyarlılık, gerçek pozitiflerin ne kadarının bulunduğunu ölçer. Yüksek duyarlılık daha az sahte işlemin kaçırılması demektir.",
        "AI ve ML temelleri"
      ),
      q(
        "Büyük dil modelindeki bağlam penceresi dolduğunda en olası sonuç nedir?",
        ["Girdinin bir bölümü işlenemez veya kırpılmak zorunda kalır", "Model otomatik olarak sınırsız belleğe geçer", "IAM rolleri silinir", "Model kalıcı olarak yeniden eğitilir"],
        0,
        "Model tek istekte sınırlı sayıda token işleyebilir.",
        "Bağlam penceresi toplam token kapasitesini sınırlar. Uzun içerik parçalanmalı, özetlenmeli veya seçilerek eklenmelidir.",
        "Üretken AI temelleri"
      ),
      q(
        "Bir modelin kuruma ait güncel belgelere dayanmasını, fakat ağırlıklarının değişmemesini isteyen ekip ne kullanmalıdır?",
        ["RAG", "Sıfırdan ön eğitim", "Yalnızca temperature artırma", "Kümeleme"],
        0,
        "Bilgiyi istek anında dış kaynaktan getir.",
        "RAG, model ağırlıklarını değiştirmeden ilgili kurumsal içeriği istem bağlamına ekler.",
        "Temel model uygulamaları"
      ),
      q(
        "Amazon Bedrock Guardrails içinde reddedilen konu tanımlamanın amacı nedir?",
        ["Uygulamanın konuşmaması gereken alanları sınırlamak", "Modelin bağlam penceresini büyütmek", "Vektörleri şifrelemek", "S3 maliyetini hesaplamak"],
        0,
        "İş politikası gereği engellenen sohbet alanlarını düşün.",
        "Reddedilen konular, uygulamanın belirli iş veya güvenlik alanlarında yanıt vermemesini sağlayan yapılandırılabilir korumadır.",
        "Amazon Bedrock"
      ),
      q(
        "Bir mobil uygulama metni doğal sese çevirecek. Hangi AWS servisi kullanılmalıdır?",
        ["Amazon Polly", "Amazon Transcribe", "Amazon Textract", "Amazon Comprehend"],
        0,
        "Metinden sese dönüşümü düşün.",
        "Amazon Polly, metni çeşitli dil ve seslerde konuşmaya dönüştürür.",
        "AWS servis seçimi"
      ),
      q(
        "Bir temel model karşılaştırmasında neden gerçek kullanım örnekleri kullanılmalıdır?",
        ["Genel kıyas sonuçları kuruma özgü kaliteyi yansıtmayabilir", "Model adını değiştirmek için", "IAM rolü oluşturmak için", "Depolama alanını doldurmak için"],
        0,
        "Görev ve veri dağılımı kuruma özgüdür.",
        "Temsilî örnekler, modelin gerçek görevdeki doğruluk, üslup, güvenlik ve performansını güvenilir biçimde ölçmeyi sağlar.",
        "Model değerlendirme"
      ),
      q(
        "Bir AI sistemi genel olarak iyi, fakat yaşlı kullanıcı grubunda zayıf çalışıyor. Bu hangi soruna işaret eder?",
        ["Grup bazlı adalet ve temsil sorunu", "Daha güçlü şifreleme gereksinimi", "DNS sorunu", "S3 depolama sınıfı sorunu"],
        0,
        "Toplam başarı belirli gruptaki farkı gizliyor.",
        "Belirli bir grupta düşük performans, eğitim verisi temsili ve adalet açısından araştırılması gereken bir eşitsizliktir.",
        "Sorumlu AI"
      ),
      q(
        "AWS API çağrıları için denetim izi oluşturmak isteyen ekip hangi servisi etkinleştirmelidir?",
        ["AWS CloudTrail", "Amazon Translate", "Amazon Personalize", "Amazon Polly"],
        0,
        "Hesap etkinliği ve API geçmişini düşün.",
        "CloudTrail, AWS hesabındaki API etkinliğini kaydederek güvenlik incelemesi ve uyumluluk için denetim izi sağlar.",
        "Güvenlik"
      ),
      q(
        "Bir istemde birkaç doğru sınıflandırma örneği verip yeni kaydı sınıflandırmak hangi tekniktir?",
        ["Few shot istem", "Zero shot istem", "Model damıtma", "Denetimsiz kümeleme"],
        0,
        "Model yeni görev örüntüsünü örneklerden görür.",
        "Few shot istem, görev talimatıyla birlikte az sayıda örnek sunarak modelin beklenen davranışı taklit etmesini sağlar.",
        "İstem mühendisliği"
      ),
      q(
        "Bir üretken AI uygulamasında kullanıcı girdisi sistem talimatlarını yok saymasını istiyor. Bu hangi tehdittir?",
        ["İstem enjeksiyonu", "Aşırı öğrenme", "Kümeleme hatası", "Vektör normalleştirme"],
        0,
        "Güvenilmeyen içerik üst düzey komutları aşmaya çalışır.",
        "İstem enjeksiyonu, saldırgan metnin model talimatlarını değiştirmeye veya gizli bilgiyi açığa çıkarmaya çalışmasıdır.",
        "AI güvenliği"
      ),
      q(
        "Bir asistanın yalnızca çalışanların erişebildiği belgeleri getirmesi nasıl sağlanır?",
        ["Getirme katmanında kullanıcı yetkilerine göre erişim filtresi uygulayarak", "Tüm belgeleri tek herkese açık indekse koyarak", "Temperature değerini düşürerek", "Model çıktısını uzatarak"],
        0,
        "Belge erişimi üretimden önce kontrol edilmelidir.",
        "Kullanıcı kimliği ve belge düzeyi izinler getirme aşamasında uygulanmalı, modele yetkisiz içerik gönderilmemelidir.",
        "Güvenlik"
      ),
      q(
        "Bir model çok yüksek eğitim başarısına rağmen yeni örneklerde zayıfsa ne yapılabilir?",
        ["Daha çeşitli veri, düzenlileştirme veya daha basit model değerlendirmek", "Eğitim verisini daha çok ezberletmek", "Test kümesini eğitim içine katmak", "Tüm değerlendirmeyi kaldırmak"],
        0,
        "Sorun aşırı öğrenmedir.",
        "Daha temsilî veri, düzenlileştirme ve uygun model karmaşıklığı aşırı öğrenmeyi azaltıp genellemeyi iyileştirebilir.",
        "AI ve ML temelleri"
      ),
      q(
        "Bedrock ajanının stok kontrol edip sipariş oluşturması için hangi iki bileşen gerekir?",
        ["Bilgi erişimi ve tanımlı eylem grubu", "Yalnızca daha yüksek temperature", "S3 Glacier ve AWS Artifact", "Amazon Polly ve Amazon Translate"],
        0,
        "Ajan hem bilgiye bakacak hem bir API eylemi yapacak.",
        "Ajan stok bilgisini bir kaynak veya araçtan alır ve sipariş API'sini tanımlı, yetkili eylem grubu üzerinden çağırır.",
        "Ajanlar"
      ),
      q(
        "Bir kuruluş, model çıktılarında kişisel bilgi görünmesini sınırlamak istiyor. Bedrock içinde hangi özellik yardımcı olur?",
        ["Guardrails hassas bilgi filtreleri", "Provisioned Throughput", "S3 Transfer Acceleration", "Amazon Route 53"],
        0,
        "Çıktıda hassas örüntüleri maskeleyen veya engelleyen özelliği düşün.",
        "Bedrock Guardrails, yapılandırılan kişisel bilgi türlerini tespit edip maskeleme veya engelleme politikaları uygulayabilir.",
        "Amazon Bedrock"
      ),
      q(
        "Bir modelin özetleri referans metinle kelime örtüşmesi üzerinden değerlendirilecek. Hangi ölçüt uygundur?",
        ["ROUGE", "Duyarlılık", "Silüet skoru", "CPU kullanımı"],
        0,
        "Özetleme için yaygın n gram ölçütünü düşün.",
        "ROUGE, üretilen özet ile referans özet arasındaki kelime veya n gram örtüşmesini ölçer.",
        "Model değerlendirme"
      ),
      q(
        "Amazon Macie hangi kaynağı hassas veri için inceler?",
        ["Amazon S3", "Amazon Polly sesleri", "IAM parolaları", "Amazon Lex niyetleri"],
        0,
        "AWS nesne deposunu düşün.",
        "Macie, S3 bucket ve nesnelerini analiz ederek kişisel veya hassas veri bulmaya yardım eder.",
        "Güvenlik"
      ),
      q(
        "Bir AI projesi için en doğru başlangıç noktası hangisidir?",
        ["Açık iş problemi, başarı ölçütü ve risk sınırı tanımlamak", "Önce en büyük modeli satın almak", "Ölçüm planı olmadan üretime çıkmak", "Teknolojiye göre sorun icat etmek"],
        0,
        "Çözümden önce sonucu tanımla.",
        "İş hedefi, ölçülebilir başarı ölçütleri, veri uygunluğu ve risk değerlendirmesi teknoloji seçiminden önce netleşmelidir.",
        "İş değeri"
      ),
      q(
        "Yüksek riskli AI kararlarında açıklanabilirlik neden önemlidir?",
        ["Paydaşların karar gerekçesini inceleyip sorgulayabilmesi için", "Modelin daha çok token üretmesi için", "Depolama maliyetini artırmak için", "İnsan gözetimini tamamen kaldırmak için"],
        0,
        "Karardan etkilenen kişilerin neden sorusunu düşün.",
        "Açıklanabilirlik, kararın dayanağını değerlendirmeyi, hataları bulmayı ve hesap verebilirliği destekler.",
        "Sorumlu AI"
      ),
      q(
        "Değişken ve düşük trafikli Bedrock iş yükü için hangi fiyatlama yaklaşımı iyi bir başlangıçtır?",
        ["İstek üzerine çıkarım", "Sürekli en yüksek ayrılmış kapasite", "Her çağrıda yeni model eğitimi", "Fiziksel sunucu satın alma"],
        0,
        "Kullandığın kadar öde esnekliğini düşün.",
        "İstek üzerine çıkarım, kapasite taahhüdü olmadan değişken trafik için esnek kullanım sunar.",
        "Maliyet"
      ),
    ],
  },
  {
    id: 7,
    title: "Sorumlu AI",
    description: "Adalet, şeffaflık, açıklanabilirlik, güvenlik, mahremiyet ve insan gözetimi.",
    domain: "SORUMLU AI",
    questions: [
      q(
        "Sorumlu AI bağlamında adalet neyi amaçlar?",
        ["Farklı gruplar için haksız sonuçları belirlemeyi ve azaltmayı", "Her kullanıcıya aynı metni göstermeyi", "Modeli yalnızca en hızlı sunucuda çalıştırmayı", "Tüm kararları gizli tutmayı"],
        0,
        "Sonuçların gruplar üzerindeki etkisini düşün.",
        "Adalet, AI sistemlerinin kişiler veya gruplar üzerinde haksız ve ayrımcı sonuçlar üretme riskini ölçmeyi ve azaltmayı hedefler.",
        "Sorumlu AI"
      ),
      q(
        "Eğitim verisinde belirli bir grubun çok az temsil edilmesi hangi riski artırır?",
        ["O grup için düşük performans ve önyargı", "Her grupta otomatik eşit başarı", "Daha düşük depolama gecikmesi", "Daha güçlü şifreleme"],
        0,
        "Model gördüğü örneklerden öğrenir.",
        "Yetersiz temsil, modelin o gruba ilişkin örüntüleri iyi öğrenememesine ve performans farklarına yol açabilir.",
        "Sorumlu AI"
      ),
      q(
        "Şeffaflık ilkesi için hangisi iyi bir uygulamadır?",
        ["Kullanıcıya AI ile etkileştiğini ve sistemin sınırlarını bildirmek", "Model kullanımını tamamen gizlemek", "Değerlendirme sonuçlarını silmek", "Tüm açıklamaları yalnızca geliştiriciye göstermek"],
        0,
        "Kullanıcının sistemin doğasını bilmesini sağla.",
        "Şeffaflık, AI kullanımının, veri uygulamalarının, yeteneklerin ve sınırlamaların ilgili taraflara açıkça anlatılmasını içerir.",
        "Sorumlu AI"
      ),
      q(
        "Açıklanabilirlik ne sağlar?",
        ["Model çıktısına etki eden nedenleri anlaşılır kılmayı", "Her modelin her zaman doğru olmasını", "Veri depolama maliyetini sıfırlamayı", "İnsan gözetimini kaldırmayı"],
        0,
        "Bir kararın neden verildiği sorusunu düşün.",
        "Açıklanabilirlik, kullanıcıların ve paydaşların model çıktısına hangi etkenlerin katkıda bulunduğunu anlamasına yardım eder.",
        "Sorumlu AI"
      ),
      q(
        "Yüksek etkili kredi kararında neden insan gözetimi gerekir?",
        ["Hatalı veya tartışmalı sonuçların incelenip düzeltilebilmesi için", "Modelin daha fazla token üretmesi için", "S3 maliyetini artırmak için", "Tüm başvuruları otomatik reddetmek için"],
        0,
        "Kararın birey üzerindeki etkisi ve itiraz hakkını düşün.",
        "İnsan gözetimi, kritik kararların incelenmesini, istisnaların değerlendirilmesini ve etkilenen kişilere başvuru yolu sunulmasını sağlar.",
        "Sorumlu AI"
      ),
      q(
        "Robustness yani sağlamlık neyi ifade eder?",
        ["Sistemin değişen veya beklenmedik girdilerde güvenilir davranmasını", "Yalnızca en uzun yanıtı üretmesini", "Tüm kullanıcıların aynı parolayı kullanmasını", "Her veriyi sonsuza dek saklamayı"],
        0,
        "Gerçek dünya koşullarındaki dayanıklılığı düşün.",
        "Sağlamlık, sistemin gürültülü, değişen, uç veya kötü niyetli girdiler altında kabul edilebilir ve güvenli biçimde çalışmasıdır.",
        "Sorumlu AI"
      ),
      q(
        "Bir işe alım modelinin adaletini değerlendirmenin en iyi yolu hangisidir?",
        ["Performansı ilgili demografik gruplara göre ayrı incelemek", "Yalnızca toplam doğruluğa bakmak", "Eğitim süresini ölçmek", "Model adını değiştirmek"],
        0,
        "Genel ortalama grup farklarını gizleyebilir.",
        "Ayrıştırılmış ölçümler, genel ortalama iyi görünse bile belirli gruplarda oluşan performans veya sonuç farklarını ortaya çıkarır.",
        "Sorumlu AI"
      ),
      q(
        "Model kartının amacı nedir?",
        ["Modelin kullanım amacı, performansı ve sınırlamalarını belgelemek", "Kredi kartı ödemesi almak", "Modeli otomatik olarak eğitmek", "Ağ trafiğini yönlendirmek"],
        0,
        "Model hakkında standart bir bilgi belgesi düşün.",
        "Model kartları kullanım amacı, veri, performans, sınırlamalar ve etik değerlendirmeler gibi bilgileri belgeler.",
        "Sorumlu AI"
      ),
      q(
        "Veri sayfası veya veri kartı neyi belgelemeye yardım eder?",
        ["Veri kümesinin kaynağını, yapısını ve bilinen sınırlamalarını", "Yalnızca modelin fiyatını", "IAM kullanıcısının parolasını", "Sunucunun fiziksel konum çizimini"],
        0,
        "Modelden ziyade veri kümesinin geçmişini düşün.",
        "Veri belgeleri, verinin nasıl toplandığı, kimleri temsil ettiği, hangi dönüşümlerden geçtiği ve hangi riskleri taşıdığı hakkında izlenebilirlik sağlar.",
        "Sorumlu AI"
      ),
      q(
        "Üretken AI çıktısında toksik içerik riskini azaltmak için ne kullanılabilir?",
        ["İçerik filtreleri ve koruma politikaları", "Daha geniş yönetici yetkisi", "Daha uzun saklama süresi", "Sınırsız temperature"],
        0,
        "Girdi ve çıktıda politika uygulayan kontrolü düşün.",
        "İçerik filtreleri ve guardrail politikaları zararlı içerik kategorilerini engellemeye yardım eder. Bunlar test ve gözetimle desteklenmelidir.",
        "Sorumlu AI"
      ),
      q(
        "Mahremiyet açısından veri minimizasyonu ne anlama gelir?",
        ["Amaç için yalnızca gerekli veriyi toplamak ve işlemek", "Mümkün olan her veriyi sonsuza dek tutmak", "Tüm veriyi herkese açmak", "Yalnızca model boyutunu küçültmek"],
        0,
        "Daha az gereksiz kişisel veri daha az risk demektir.",
        "Veri minimizasyonu, belirli ve meşru amaç için gereken en az miktarda verinin kullanılmasını hedefler.",
        "Sorumlu AI"
      ),
      q(
        "Bir AI sistemi önemli karar verdiğinde itiraz mekanizması sunmak hangi ilkeyi destekler?",
        ["Hesap verebilirlik ve insan gözetimi", "Yalnızca performans optimizasyonu", "Veri sıkıştırma", "Model boyutu artırma"],
        0,
        "Etkilenen kişinin kararı sorgulayabilmesini düşün.",
        "İtiraz ve düzeltme yolları, otomatik kararların insanlar tarafından incelenebilmesini sağlayarak hesap verebilirliği destekler.",
        "Sorumlu AI"
      ),
      q(
        "AI yönetişiminde hesap verebilirlik ne gerektirir?",
        ["Karar ve riskler için açık sorumluluk sahipleri belirlemeyi", "Sistemin sahibini gizlemeyi", "Tüm kontrolleri modele bırakmayı", "Günlükleri devre dışı bırakmayı"],
        0,
        "Bir sorun olduğunda kimin sorumlu olduğunu düşün.",
        "Hesap verebilirlik, sistemin sonuçlarından, kontrollerinden ve düzeltici eylemlerinden sorumlu rollerin açıkça tanımlanmasını gerektirir.",
        "Sorumlu AI"
      ),
      q(
        "Model performansını yalnızca dağıtımdan önce ölçmek neden yetersizdir?",
        ["Veri ve kullanıcı davranışı zamanla değişebilir", "Model dağıtımdan sonra değişmez biçimde kusursuz olur", "Üretimde metrik toplanamaz", "Doğruluk hiçbir zaman ölçülemez"],
        0,
        "Gerçek dünya dağılımının zamanla kayabileceğini düşün.",
        "Veri kayması ve değişen kullanım koşulları kalite ile adaleti bozabilir. Sürekli izleme ve periyodik değerlendirme gerekir.",
        "Sorumlu AI"
      ),
      q(
        "Kapsayıcı tasarım yaklaşımı hangisidir?",
        ["Farklı kullanıcı gruplarını gereksinim ve test süreçlerine dahil etmek", "Yalnızca en büyük kullanıcı grubunu test etmek", "Erişilebilirliği sonradan düşünmek", "Tüm kullanıcıların aynı ihtiyacı olduğunu varsaymak"],
        0,
        "Etkilenen grupların erken katılımını düşün.",
        "Farklı deneyim ve ihtiyaçlara sahip kullanıcıları tasarım ve değerlendirmeye dahil etmek dışlanma riskini azaltır.",
        "Sorumlu AI"
      ),
      q(
        "Bir modelin güven düzeyi düşük olduğunda en uygun davranış ne olabilir?",
        ["Yanıtı insan incelemesine yönlendirmek veya işlemden kaçınmak", "Sonucu kesin gerçek olarak sunmak", "Güven değerini kullanıcıdan gizlemek", "Rastgele bir eylem yapmak"],
        0,
        "Belirsizliği yönetmek için güvenli geri çekilmeyi düşün.",
        "Düşük güven durumlarında insan incelemesi veya güvenli biçimde yanıt vermeme, hatalı otomasyon riskini azaltır.",
        "Sorumlu AI"
      ),
      q(
        "Üretken içerikte köken bilgisinin gösterilmesi neyi destekler?",
        ["İçeriğin kaynağı ve üretim biçimi hakkında şeffaflığı", "Modelin her zaman doğru olmasını", "Depolama maliyetinin sıfırlanmasını", "IAM rollerinin kaldırılmasını"],
        0,
        "İçeriğin insan mı AI mı tarafından üretildiğini bilmek önemlidir.",
        "Köken bilgisi, etiketleme ve uygun filigran teknikleri kullanıcıların içeriğin kaynağını değerlendirmesine yardım eder.",
        "Sorumlu AI"
      ),
      q(
        "Bir şirket sorumlu AI hedeflerini nasıl ölçülebilir hale getirebilir?",
        ["Belirli riskler için eşikler, ölçütler ve inceleme sıklığı tanımlayarak", "Yalnızca genel bir iyi niyet metni yazarak", "Tüm kararları model sağlayıcısına bırakarak", "Değerlendirme verisini silerek"],
        0,
        "İlkeyi ölçülebilir kontrol ve göstergelere dönüştür.",
        "Adalet farkı, zararlı çıktı oranı ve insan yönlendirme oranı gibi tanımlı ölçütler ilkelerin uygulamada izlenmesini sağlar.",
        "Sorumlu AI"
      ),
      q(
        "Enerji tüketimini sorumlu AI değerlendirmesine katmak hangi boyutla ilgilidir?",
        ["Sürdürülebilirlik", "Yalnızca doğruluk", "Kimlik doğrulama", "Metin çevirisi"],
        0,
        "AI sisteminin çevresel etkisini düşün.",
        "Model boyutu, eğitim ve çıkarım tüketimi gibi çevresel etkileri dikkate almak sürdürülebilir AI uygulamalarının parçasıdır.",
        "Sorumlu AI"
      ),
      q(
        "Sorumlu AI için en doğru yaşam döngüsü yaklaşımı hangisidir?",
        ["Riskleri tasarımdan üretim izlemeye kadar sürekli yönetmek", "Yalnızca dağıtım gününde kontrol etmek", "Sadece model sağlayıcısının değerlendirmesine güvenmek", "Sorunları kullanıcı bildirimine kadar görmezden gelmek"],
        0,
        "Risk yönetimi tek seferlik bir kontrol değildir.",
        "Sorumlu AI gereksinimleri kullanım amacı, veri, geliştirme, test, dağıtım, izleme ve kullanımdan kaldırma boyunca ele alınmalıdır.",
        "Sorumlu AI"
      ),
    ],
  },
  {
    id: 8,
    title: "Güvenlik ve yönetişim",
    description: "IAM, şifreleme, günlükleme, veri koruma, uyumluluk ve üretken AI tehditleri.",
    domain: "GÜVENLİK VE YÖNETİŞİM",
    questions: [
      q(
        "AWS paylaşılan sorumluluk modeline göre müşteri neden sorumludur?",
        ["Kendi verisini, erişim izinlerini ve hizmet yapılandırmasını korumaktan", "AWS veri merkezlerinin fiziksel güvenliğinden", "AWS donanımını üretmekten", "Küresel AWS ağını işletmekten"],
        0,
        "Bulutun güvenliği ile buluttaki güvenlik ayrımını düşün.",
        "AWS bulut altyapısının güvenliğini yönetir. Müşteri ise kullandığı hizmete göre veri, kimlik, erişim ve yapılandırma güvenliğinden sorumludur.",
        "Güvenlik"
      ),
      q(
        "En az yetki ilkesi neyi gerektirir?",
        ["Kimliğe yalnızca görev için gereken izinleri vermeyi", "Her kullanıcıya yönetici erişimi vermeyi", "Kimlik doğrulamayı kaldırmayı", "Tüm kaynakları herkese açmayı"],
        0,
        "Gereksiz izinleri azalt.",
        "En az yetki, kullanıcı ve hizmetlerin yalnızca görevlerini tamamlamak için gereken eylem ve kaynaklara erişmesini sağlar.",
        "Güvenlik"
      ),
      q(
        "AWS KMS ne için kullanılır?",
        ["Şifreleme anahtarları oluşturmak ve yönetmek", "Metni konuşmaya çevirmek", "Modeli ince ayarlamak", "Belgeden tablo çıkarmak"],
        0,
        "Anahtar yönetimi servisinin adını düşün.",
        "AWS Key Management Service, veriyi koruyan şifreleme anahtarlarını oluşturmayı, yönetmeyi ve kullanımını denetlemeyi sağlar.",
        "Güvenlik"
      ),
      q(
        "S3 içinde saklanan eğitim verisini korumak için hangi kontrol uygulanmalıdır?",
        ["Beklemede şifreleme ve kısıtlı erişim politikaları", "Herkese açık yazma izni", "Anonim kullanıcı erişimi", "Tüm sürümleri internette yayımlama"],
        0,
        "Hem veri gizliliğini hem kimlerin erişebildiğini düşün.",
        "Beklemede şifreleme ve uygun S3 ile IAM politikaları, depolanan eğitim verisinin yetkisiz erişime karşı korunmasına yardım eder.",
        "Güvenlik"
      ),
      q(
        "Veriyi aktarım sırasında korumak için hangi teknoloji kullanılır?",
        ["TLS", "Düz metin HTTP", "Herkese açık bucket", "Anonim IAM rolü"],
        0,
        "İstemci ile hizmet arasındaki bağlantıyı şifrelemeyi düşün.",
        "TLS, ağ üzerinden aktarılan veriyi şifreleyerek dinleme ve değişiklik riskini azaltır.",
        "Güvenlik"
      ),
      q(
        "Bir AWS hesabında kim hangi API çağrısını ne zaman yaptı sorusunu hangi servis yanıtlar?",
        ["AWS CloudTrail", "Amazon Polly", "Amazon Personalize", "AWS Glue DataBrew"],
        0,
        "AWS API etkinlik geçmişini düşün.",
        "AWS CloudTrail, hesap içindeki kullanıcı ve hizmet API etkinliklerini denetim amacıyla kaydeder.",
        "Güvenlik"
      ),
      q(
        "Amazon CloudWatch ile AI uygulamasında ne izlenebilir?",
        ["Metrikler, günlükler ve alarmlar", "Yalnızca çalışanların izin günleri", "Model sağlayıcısının özel eğitim verisi", "Fiziksel veri merkezi ziyaretçileri"],
        0,
        "Operasyonel gözlemlenebilirliği düşün.",
        "CloudWatch, gecikme, hata, kullanım ve kaynak metriklerini toplar; günlüklar ve alarmlarla operasyonel izleme sağlar.",
        "Güvenlik"
      ),
      q(
        "AWS Secrets Manager hangi veri türü için uygundur?",
        ["API anahtarları ve veritabanı kimlik bilgileri", "Genel ürün açıklamaları", "Model değerlendirme grafikleri", "Anonim kullanım istatistikleri"],
        0,
        "Uygulama koduna gömülmemesi gereken sırları düşün.",
        "Secrets Manager, parolalar ve API anahtarları gibi sırları güvenli saklama, erişme ve döndürme yetenekleri sağlar.",
        "Güvenlik"
      ),
      q(
        "Amazon Macie bir AI veri gölüne nasıl katkı sağlar?",
        ["S3 içindeki hassas verileri keşfedip raporlayarak", "Temel modeli eğiterek", "Sesli yanıt üreterek", "Model gecikmesini düşürerek"],
        0,
        "S3 veri güvenliğini düşün.",
        "Macie, S3 içinde kişisel bilgi ve kimlik bilgisi gibi hassas veri örüntülerini bulmaya yardım eder.",
        "Güvenlik"
      ),
      q(
        "Kişisel bilgileri LLM istemine göndermeden önce maskelemek hangi amacı destekler?",
        ["Veri gizliliğini ve minimizasyonu", "Model boyutunu artırmayı", "Ağ gecikmesini yükseltmeyi", "Herkese açık erişimi"],
        0,
        "Gereksiz hassas bilgiyi model çağrısından çıkar.",
        "Maskeleme veya redaksiyon, görev için gerekmeyen kişisel verinin işlenmesini önleyerek gizlilik riskini azaltır.",
        "Veri koruma"
      ),
      q(
        "VPC endpoint kullanmanın bir yararı nedir?",
        ["Desteklenen AWS servislerine trafiği genel internete çıkarmadan yönlendirmek", "Tüm IAM kontrollerini kaldırmak", "Modeli otomatik eğitmek", "Her veriyi halka açmak"],
        0,
        "Özel ağ bağlantısını düşün.",
        "VPC endpoint, desteklenen servislere VPC içinden özel bağlantı kurulmasına ve internet geçidi ihtiyacının azaltılmasına yardım eder.",
        "Güvenlik"
      ),
      q(
        "Model girdilerinin yetkisiz biçimde eğitim verisini bozmaya çalışmasına ne ad verilir?",
        ["Veri zehirleme", "Kümeleme", "Özetleme", "Tokenlaştırma"],
        0,
        "Saldırgan eğitim verisine kötü örnekler ekler.",
        "Veri zehirleme, model davranışını bozmak veya arka kapı oluşturmak için eğitim verisinin kasıtlı biçimde değiştirilmesidir.",
        "AI tehditleri"
      ),
      q(
        "Model tedarik zinciri riskini azaltmak için hangisi yapılmalıdır?",
        ["Model ve veri kaynağını doğrulayıp sürüm ve bütünlük kayıtlarını tutmak", "Kaynağı bilinmeyen her modeli doğrudan üretime almak", "Lisans bilgilerini yok saymak", "Değerlendirmeyi atlamak"],
        0,
        "Bileşenlerin kökeni ve güvenilirliğini düşün.",
        "Kaynak, lisans, bütünlük, sürüm ve güvenlik değerlendirmesi model ile veri tedarik zincirindeki riski azaltır.",
        "AI tehditleri"
      ),
      q(
        "AWS Artifact ne sağlar?",
        ["AWS uyumluluk raporları ve anlaşmalarına erişim", "Gerçek zamanlı metin çevirisi", "Model ince ayarı", "Vektör araması"],
        0,
        "Denetçiyle paylaşılabilecek AWS belgelerini düşün.",
        "AWS Artifact, AWS güvenlik ve uyumluluk raporları ile belirli çevrim içi anlaşmalara isteğe bağlı erişim sağlar.",
        "Uyumluluk"
      ),
      q(
        "AWS Config ne için kullanılabilir?",
        ["Kaynak yapılandırmalarını kaydetmek ve kurallara uygunluğu değerlendirmek", "Metin özetlemek", "Görüntü üretmek", "Ses dosyasını yazıya çevirmek"],
        0,
        "Kaynakların zaman içindeki yapılandırma durumunu düşün.",
        "AWS Config, desteklenen kaynakların yapılandırma geçmişini izler ve tanımlı kurallara uyumunu değerlendirebilir.",
        "Yönetişim"
      ),
      q(
        "Veri yerleşimi gereksinimi olan bir AI çözümünde ilk hangi karar önemlidir?",
        ["Verinin işleneceği ve saklanacağı AWS Bölgesini doğrulamak", "Yalnızca arayüz rengini seçmek", "Temperature değerini yükseltmek", "Tüm kullanıcılara aynı rolü vermek"],
        0,
        "Yasal gereksinim verinin coğrafi konumuyla ilgilidir.",
        "Bölge seçimi, hizmetin kullanılabilirliğiyle birlikte verinin işlenme ve saklanma konumuna ilişkin gereksinimlerle değerlendirilmelidir.",
        "Uyumluluk"
      ),
      q(
        "Veri saklama politikası neyi tanımlamalıdır?",
        ["Verinin ne kadar süre tutulacağını ve nasıl güvenli silineceğini", "Modelin marka rengini", "Her istemin en uzun yanıtını", "Çalışanın cihaz modelini"],
        0,
        "Veri yaşam döngüsünün sonunu düşün.",
        "Saklama politikası iş ve mevzuat gereksinimlerine göre tutma süresini, arşivlemeyi ve güvenli silmeyi tanımlar.",
        "Yönetişim"
      ),
      q(
        "Bir kuruluş AI kullanımını onaylamak için neden risk sınıflandırması yapmalıdır?",
        ["Kontrol düzeyini kullanımın etkisi ve hassasiyetine göre belirlemek", "Her kullanıma aynı düşük kontrolü uygulamak", "Tüm AI projelerini otomatik reddetmek", "Yalnızca maliyeti gizlemek"],
        0,
        "Düşük etkili özetleme ile yüksek etkili kredi kararının aynı olmadığını düşün.",
        "Risk sınıflandırması, insan gözetimi, test, belge ve onay gereksinimlerini kullanım senaryosunun etkisine göre uyarlamayı sağlar.",
        "Yönetişim"
      ),
      q(
        "Bedrock Guardrails neden tek başına tam bir güvenlik çözümü değildir?",
        ["Kimlik, ağ, veri koruma, izleme ve uygulama kontrolleri yine gerekir", "Hiç içerik filtresi sunmaz", "Yalnızca veritabanı yedekler", "IAM yerine geçen tek servistir"],
        0,
        "Katmanlı savunmayı düşün.",
        "Guardrails içerik ve konu kontrolleri sağlar; fakat en az yetki, şifreleme, ağ güvenliği, doğrulama ve izleme gibi kontrollerin yerini almaz.",
        "Güvenlik"
      ),
      q(
        "Üretken AI günlüklerinde hassas veri riski nasıl azaltılır?",
        ["Günlükleme öncesi redaksiyon ve sıkı erişim ile saklama politikası uygulayarak", "Günlükleri herkese açarak", "Her istemi süresiz saklayarak", "Şifrelemeyi kapatarak"],
        0,
        "Gözlemlenebilirlik ile veri gizliliğini birlikte yönet.",
        "Hassas alanları maskelemek, günlük erişimini sınırlandırmak, şifrelemek ve uygun saklama süresi tanımlamak veri sızıntısı riskini azaltır.",
        "Güvenlik"
      ),
    ],
  },
  {
    id: 5,
    title: "İstem ve model uyarlama",
    description: "İstem teknikleri, çıkarım ayarları, ince ayar yöntemleri ve performans ölçümü.",
    domain: "TEMEL MODEL UYGULAMALARI",
    questions: [
      q(
        "Modele hiçbir örnek vermeden yalnızca görevi açıklamak hangi istem tekniğidir?",
        ["Zero shot istem", "Few shot istem", "İnce ayar", "Kümeleme"],
        0,
        "Model yalnızca talimata dayanır.",
        "Zero shot istem, modelden örnek sunmadan bir görevi yerine getirmesini ister.",
        "İstem mühendisliği"
      ),
      q(
        "İstemde birkaç girdi ve doğru çıktı örneği göstermek hangi tekniktir?",
        ["Few shot istem", "Zero shot istem", "Veri şifreleme", "Model damıtma"],
        0,
        "Few sözcüğü az sayıda örneği ifade eder.",
        "Few shot istem, modele beklenen örüntüyü göstermek için birkaç örnek içerir.",
        "İstem mühendisliği"
      ),
      q(
        "Bir sistem isteminin temel rolü nedir?",
        ["Modelin genel rolünü ve davranış kurallarını belirlemek", "Kullanıcı parolasını saklamak", "Model sunucusunu yeniden başlatmak", "Vektör indeksini silmek"],
        0,
        "Konuşmanın tamamında geçerli üst düzey yönlendirmeyi düşün.",
        "Sistem istemi, modelin rolü, tonu, kısıtları ve nasıl yanıt vermesi gerektiği için üst düzey talimatlar sağlar.",
        "İstem mühendisliği"
      ),
      q(
        "Uzun bir istemde kaynak metni üç tırnak veya XML etiketleri içine almak ne sağlar?",
        ["Talimat ile verinin sınırlarını açıklaştırır", "Modeli otomatik olarak eğitir", "Bağlam penceresini büyütür", "Veriyi KMS ile şifreler"],
        0,
        "Ayraçlar bölümlerin karışmasını önler.",
        "Belirgin ayraçlar, modelin talimatları kaynak içerikten ayırmasını kolaylaştırır ve istemin yapısını netleştirir.",
        "İstem mühendisliği"
      ),
      q(
        "Modelden makine tarafından işlenecek sonuç isteniyorsa istemde ne belirtilmelidir?",
        ["Kesin çıktı şeması ve örneği", "Yalnızca daha yaratıcı ol talimatı", "Mümkün olan en yüksek temperature", "Model sağlayıcısının geçmişi"],
        0,
        "Tüketici uygulamanın beklediği biçimi açıkça tarif et.",
        "JSON alanları gibi açık bir çıktı şeması ve örnek, yanıtın uygulama tarafından güvenilir biçimde işlenmesini kolaylaştırır.",
        "İstem mühendisliği"
      ),
      q(
        "Bir istem şablonundaki değişkenlerin yararı nedir?",
        ["Aynı yapıyı farklı girdilerle yeniden kullanmak", "Model ağırlıklarını değiştirmek", "Her kullanıcıya yönetici yetkisi vermek", "Bağlam sınırını kaldırmak"],
        0,
        "Sabit talimat ile değişen veriyi ayırmayı düşün.",
        "Şablon değişkenleri, tutarlı talimat yapısını koruyup müşteri adı veya belge içeriği gibi değerleri dinamik vermeyi sağlar.",
        "İstem mühendisliği"
      ),
      q(
        "Modelin yalnızca verilen belgeden yanıt vermesini sağlamak için en iyi istem talimatı hangisidir?",
        ["Yanıt belgede yoksa bilmediğini söylemesini istemek", "Temperature değerini en yükseğe çıkarmak", "Belgeyi istemden çıkarmak", "Her durumda bir cevap uydurmasını istemek"],
        0,
        "Desteklenmeyen iddiaları azaltacak bir geri çekilme davranışı tanımla.",
        "Kaynakta destek bulunmadığında bunu açıkça söyleme talimatı, temelsiz yanıt riskini azaltır. Yine de değerlendirme ve koruma katmanları gerekir.",
        "İstem mühendisliği"
      ),
      q(
        "Top p ayarı neyi kontrol eder?",
        ["Bir sonraki token seçimi için dikkate alınan olasılık kütlesini", "Modelin IAM rolünü", "S3 depolama sınıfını", "Eğitim verisinin lisansını"],
        0,
        "Nucleus sampling olarak da bilinir.",
        "Top p, kümülatif olasılığı belirlenen eşiğe ulaşan token adaylarını örnekleme havuzuna alır.",
        "Çıkarım ayarları"
      ),
      q(
        "Maksimum token ayarı hangi sonucu doğrudan sınırlar?",
        ["Üretilecek yanıtın uzunluğunu", "Modelin eğitim veri miktarını", "AWS hesabındaki kullanıcı sayısını", "Vektör boyutunu her zaman"],
        0,
        "Çıktının ne zaman kesileceğini düşün.",
        "Maksimum token değeri, modelin tek yanıtta üretebileceği token sayısına üst sınır koyar.",
        "Çıkarım ayarları"
      ),
      q(
        "Yaratıcı slogan üretiminde hangi ayar yaklaşımı daha uygun olabilir?",
        ["Temperature değerini ölçülü biçimde artırmak", "Tüm çeşitliliği sıfırlamak", "Bağlamı tamamen kaldırmak", "IAM erişimini genişletmek"],
        0,
        "Bu görevde kontrollü çeşitlilik faydalıdır.",
        "Daha yüksek temperature farklı ifade seçeneklerini teşvik edebilir. Değer yine kalite testleriyle belirlenmelidir.",
        "Çıkarım ayarları"
      ),
      q(
        "İstem enjeksiyonu nedir?",
        ["Kötü niyetli girdinin model talimatlarını geçersiz kılmaya çalışması", "Modelin hızını artıran donanım tekniği", "Veri kümesini dengeleme yöntemi", "Bir değerlendirme ölçütü"],
        0,
        "Kullanıcı girdisi gizli veya üst düzey talimatları aşmaya çalışır.",
        "İstem enjeksiyonunda saldırgan girdi, modeli güvenilir talimatları görmezden gelmeye veya istenmeyen eylem yapmaya yöneltir.",
        "İstem güvenliği"
      ),
      q(
        "İstem enjeksiyonu riskini azaltmak için hangisi en uygundur?",
        ["Girdiyi güvenilmeyen veri sayıp erişimleri sınırlandırmak ve çıktıyı doğrulamak", "Modele sınırsız araç izni vermek", "Sistem istemini kullanıcıya düzenletmek", "Tüm günlükleri kapatmak"],
        0,
        "Savunmayı yalnızca modele bırakma.",
        "Girdi doğrulama, açık talimat sınırları, en az yetkili araç erişimi, koruma katmanları ve çıktı doğrulama birlikte kullanılmalıdır.",
        "İstem güvenliği"
      ),
      q(
        "Sık değişen ürün stok bilgilerini modele kazandırmak için neden ince ayar yerine RAG tercih edilir?",
        ["Bilgi kaynağı model ağırlıklarını değiştirmeden güncellenebilir", "RAG hiçbir veri kaynağı gerektirmez", "İnce ayar yalnızca görüntüler içindir", "RAG her yanıtı garanti eder"],
        0,
        "Bilginin güncellik hızını düşün.",
        "RAG güncel kaynaktan bilgi getirir. İnce ayarı her stok değişiminde tekrarlamak pahalı ve yavaş olur.",
        "Model uyarlama"
      ),
      q(
        "Denetimli ince ayar için hangi veri gerekir?",
        ["Yüksek kaliteli girdi ve beklenen çıktı çiftleri", "Yalnızca etiketsiz rastgele kayıtlar", "Sadece IAM günlükleri", "Hiç örnek gerektirmez"],
        0,
        "Modele istenen davranışı örneklerle göstermek gerekir.",
        "Denetimli ince ayar, hedef görevi ve doğru davranışı temsil eden etiketli girdi çıktı örneklerinden yararlanır.",
        "Model uyarlama"
      ),
      q(
        "İnce ayarın olası bir riski nedir?",
        ["Düşük kaliteli veride önyargı veya aşırı öğrenme", "Modelin artık hiçbir çıktı üretememesi zorunluluğu", "S3 verisinin otomatik silinmesi", "IAM politikalarının devre dışı kalması"],
        0,
        "Uyarlama verisinin kalitesi model davranışını etkiler.",
        "Yetersiz, dengesiz veya hatalı ince ayar verisi istenmeyen davranışları güçlendirebilir ve genelleme yeteneğini azaltabilir.",
        "Model uyarlama"
      ),
      q(
        "RLHF kısaltması hangi yaklaşımı ifade eder?",
        ["İnsan geri bildiriminden pekiştirmeli öğrenme", "Hızlı dil dosyası çoğaltma", "Rastgele log filtreleme", "İlişkisel veri yükleme"],
        0,
        "İnsan tercihleri model davranışını yönlendirir.",
        "RLHF, insan değerlendirmelerinden alınan tercih sinyalleriyle model davranışını uyarlayan yaklaşımdır.",
        "Model uyarlama"
      ),
      q(
        "Bir özetleme modelinde ROUGE ölçütü genel olarak neyi karşılaştırır?",
        ["Üretilen özet ile referans özet arasındaki metin örtüşmesini", "Sunucu işlemci kullanımını", "IAM izin sayısını", "S3 nesne boyutunu"],
        0,
        "Referans metindeki kelime dizilerinin ne kadarının yakalandığını düşün.",
        "ROUGE, özellikle özetleme görevlerinde üretilen metin ile referans metin arasındaki n gram örtüşmesini ölçmek için kullanılır.",
        "Model değerlendirme"
      ),
      q(
        "BLEU ölçütü en çok hangi görevle ilişkilidir?",
        ["Makine çevirisi", "Görüntü segmentasyonu", "Anomali kümeleme", "Erişim denetimi"],
        0,
        "Üretilen çeviriyi referans çeviriyle karşılaştırır.",
        "BLEU, makine çevirisi çıktısının bir veya daha fazla referans çeviriyle örtüşmesini değerlendiren otomatik ölçüttür.",
        "Model değerlendirme"
      ),
      q(
        "İnsan değerlendirmesi ne zaman özellikle değerlidir?",
        ["Ton, yararlılık ve nüans gibi otomatik ölçülmesi zor niteliklerde", "Yalnızca işlemci sıcaklığını ölçerken", "S3 nesnesi sayarken", "IAM rolü oluştururken"],
        0,
        "Her kalite boyutu kelime eşleşmesiyle ölçülemez.",
        "İnsanlar doğruluk yanında yararlılık, uygunluk, ton ve incelikli tercihleri değerlendirebilir.",
        "Model değerlendirme"
      ),
      q(
        "Bir istem değişikliğinin gerçekten iyileştirme sağladığını belirlemenin en güvenilir yolu nedir?",
        ["Sabit değerlendirme veri kümesinde önceki sürümle karşılaştırmak", "Tek bir başarılı örneğe bakmak", "Yalnızca istemi uzatmak", "Sonucu ölçmeden yayımlamak"],
        0,
        "Kontrollü ve tekrarlanabilir karşılaştırma yap.",
        "Sürüm kontrollü istemleri temsilî bir değerlendirme kümesinde aynı ölçütlerle karşılaştırmak değişikliğin etkisini görünür kılar.",
        "Model değerlendirme"
      ),
    ],
  },
  {
    id: 6,
    title: "RAG, ajanlar ve değerlendirme",
    description: "Bilgi getirme akışı, ajan tasarımı, kalite ölçümü, gözlemleme ve maliyet dengesi.",
    domain: "TEMEL MODEL UYGULAMALARI",
    questions: [
      q(
        "Bir RAG sisteminde belgeler neden parçalara ayrılır?",
        ["İlgili küçük bölümlerin aranıp bağlama eklenebilmesi için", "Belgeleri otomatik olarak gizlemek için", "IAM rollerini çoğaltmak için", "Modeli her parçada yeniden eğitmek için"],
        0,
        "Uzun belgenin tamamı yerine ilgili kesitleri bulmayı düşün.",
        "Parçalama, belgeleri arama ve bağlam sınırları için yönetilebilir bölümlere ayırır. Parça boyutu kaliteyi etkileyen bir tasarım kararıdır.",
        "RAG"
      ),
      q(
        "RAG veri alım sürecinde gömme modeli ne yapar?",
        ["Metin parçalarını anlamsal vektörlere dönüştürür", "Kullanıcıya IAM rolü verir", "Her belgeyi seslendirir", "Model çıktısını şifre anahtarına çevirir"],
        0,
        "Vektör araması için sayısal temsil gerekir.",
        "Gömme modeli belge parçalarını ve sorguyu anlamsal benzerlik hesabında kullanılabilecek vektörlere dönüştürür.",
        "RAG"
      ),
      q(
        "RAG sorgu anında doğru işlem sırası hangisidir?",
        ["Sorguyu göm, ilgili parçaları getir, bağlama ekle, yanıt üret", "Yanıt üret, modeli eğit, veriyi sil, sorguyu göm", "Belgeyi sil, temperature artır, yanıt üret", "Kullanıcı oluştur, ağı kur, modeli indir"],
        0,
        "Önce bilgi bulunur, sonra üretim yapılır.",
        "RAG akışı sorgu temsilini oluşturur, en ilgili içerikleri getirir, bunları isteme ekler ve modelden temellendirilmiş yanıt ister.",
        "RAG"
      ),
      q(
        "RAG sisteminde kaynak gösterimi neden yararlıdır?",
        ["Kullanıcının yanıtı dayandığı belgelerle doğrulamasına yardım eder", "Yanıtın mutlaka doğru olduğunu garanti eder", "Model ihtiyacını kaldırır", "Tüm erişim kontrollerini değiştirir"],
        0,
        "Şeffaflık ve doğrulanabilirliği düşün.",
        "Kaynak atıfları, kullanıcıların yanıtın dayanağını incelemesine yardımcı olur ancak doğruluğu tek başına garanti etmez.",
        "RAG"
      ),
      q(
        "RAG bilgi tabanındaki belgeler güncellendiğinde ne yapılmalıdır?",
        ["Değişen içerik yeniden işlenip indeks senkronize edilmelidir", "Temel model her zaman baştan eğitilmelidir", "Tüm IAM kullanıcıları silinmelidir", "Temperature sıfırlanmalıdır"],
        0,
        "Arama indeksinin kaynakla aynı bilgiyi taşıması gerekir.",
        "Yeni veya değişen belgelerin parçalanıp gömmelerinin güncellenmesi, getirilen içeriğin güncel kalmasını sağlar.",
        "RAG"
      ),
      q(
        "Çok küçük belge parçaları kullanmanın olası sakıncası nedir?",
        ["Anlamı tamamlayan bağlamın parçalanması", "Vektör aramasının tamamen imkansız olması", "IAM politikalarının bozulması", "Belgelerin otomatik silinmesi"],
        0,
        "Bir cümlenin komşu bilgilerden kopabileceğini düşün.",
        "Çok küçük parçalar önemli bağlamı kaybedebilir. Çok büyük parçalar ise ilgisiz içeriği bağlama taşıyabilir.",
        "RAG"
      ),
      q(
        "Hibrit arama hangi iki yaklaşımı birleştirir?",
        ["Anahtar kelime ve anlamsal vektör aramasını", "Ses ve görüntü üretimini", "Eğitim ve faturalamayı", "IAM ve DNS yönetimini"],
        0,
        "Tam terim eşleşmesi ile anlam benzerliğini birlikte düşün.",
        "Hibrit arama, kesin anahtar kelime eşleşmesinin güçlü yanlarını anlamsal vektör aramasıyla birleştirir.",
        "RAG"
      ),
      q(
        "Bir ajanın temel modelden farkı nedir?",
        ["Araç kullanarak planlı eylemler gerçekleştirebilmesi", "Hiç dil modeli kullanmaması", "Yalnızca tek kelime üretmesi", "Her zaman insan olması"],
        0,
        "Ajan çıktı üretmenin ötesinde çevreyle etkileşir.",
        "Ajan, modelin akıl yürütme yeteneğini araçlar, API işlemleri, bellek ve düzenleme adımlarıyla birleştirir.",
        "Ajanlar"
      ),
      q(
        "Bir ajana araç izni verirken en güvenli yaklaşım hangisidir?",
        ["Yalnızca gereken eylem ve kaynaklara en az yetki vermek", "Tüm hesaba yönetici erişimi vermek", "Kimlik doğrulamayı kaldırmak", "Tüm API çağrılarını anonim yapmak"],
        0,
        "Hata veya kötüye kullanım etkisini sınırlamayı düşün.",
        "En az yetki ilkesi, ajanın yalnızca görevi için gereken eylemleri yapabilmesini sağlayarak etki alanını sınırlar.",
        "Ajanlar"
      ),
      q(
        "Para transferi gibi yüksek etkili bir ajan eyleminde hangi kontrol önemlidir?",
        ["İşlem öncesinde insan onayı istemek", "Temperature değerini yükseltmek", "Tüm denetim günlüklerini kapatmak", "Sınırsız yeniden deneme yapmak"],
        0,
        "Geri alınması zor işlemlerde insanı döngüde tut.",
        "Yüksek riskli veya geri alınması zor eylemler için insan onayı güvenli bir kontrol noktası sağlar.",
        "Ajanlar"
      ),
      q(
        "Ajanın bir konuşmadaki önceki bilgileri kullanması hangi kavramla ilişkilidir?",
        ["Oturum bağlamı veya bellek", "Veri ambarı sıkıştırması", "Model damıtma", "DNS yönlendirme"],
        0,
        "Aynı etkileşimde geçmiş adımları hatırlamayı düşün.",
        "Oturum bağlamı veya bellek, ajanın önceki mesaj ve eylemleri dikkate alarak tutarlı ilerlemesine yardımcı olur.",
        "Ajanlar"
      ),
      q(
        "Bir ajanın aynı aracı sonsuz döngüde çağırmasını önlemek için ne yapılabilir?",
        ["Adım ve yeniden deneme sınırları koymak", "Ajana daha fazla yönetici izni vermek", "Tüm zaman aşımı değerlerini kaldırmak", "Her yanıtı bellekte sonsuza dek tutmak"],
        0,
        "Kaynak tüketimini sınırlayan çalışma sınırlarını düşün.",
        "Maksimum adım, zaman aşımı ve yeniden deneme sınırları ajanın kontrolsüz döngüye girmesini engellemeye yardımcı olur.",
        "Ajanlar"
      ),
      q(
        "Bir soru yanıtlama sisteminde exact match ölçütü neyi kontrol eder?",
        ["Üretilen cevabın referans cevapla tam eşleşmesini", "Anlamca benzer her yanıtı insan gibi değerlendirmeyi", "Sunucu gecikmesini", "Şifreleme gücünü"],
        0,
        "Bu ölçüt yüzey biçimine karşı katıdır.",
        "Exact match, model çıktısının beklenen referansla tam olarak aynı olup olmadığını ölçer ve anlamca doğru farklı ifadeleri kaçırabilir.",
        "Model değerlendirme"
      ),
      q(
        "Bir üretken AI uygulamasında yalnızca kaliteyi ölçmek neden yeterli değildir?",
        ["Gecikme, maliyet, güvenlik ve kullanıcı deneyimi de başarıyı etkiler", "Kalite hiçbir zaman önemli değildir", "Maliyet her zaman sıfırdır", "Gecikme yalnızca eğitimde vardır"],
        0,
        "Üretim ortamında birden fazla iş hedefi vardır.",
        "Uygulama seçimi kalite yanında gecikme, token maliyeti, güvenlik, ölçeklenebilirlik ve kullanıcı memnuniyetini dengelemelidir.",
        "Model değerlendirme"
      ),
      q(
        "Çevrim dışı değerlendirme ile çevrim içi değerlendirme arasındaki temel fark nedir?",
        ["Çevrim dışı değerlendirme sabit veriyle, çevrim içi değerlendirme gerçek kullanım sinyalleriyle yapılır", "İkisi her zaman aynıdır", "Çevrim içi değerlendirme internet hızını ölçer", "Çevrim dışı değerlendirme veri kullanmaz"],
        0,
        "Laboratuvar veri kümesi ile gerçek kullanıcı davranışını karşılaştır.",
        "Çevrim dışı testler sürümleri kontrollü veriyle karşılaştırır. Çevrim içi testler gerçek trafikte memnuniyet ve görev başarısı gibi sinyalleri ölçer.",
        "Model değerlendirme"
      ),
      q(
        "A B testi ne sağlar?",
        ["İki sürümü benzer kullanıcı gruplarında karşılaştırmayı", "Modeli otomatik şifrelemeyi", "Tüm kullanıcıları tek sürüme zorlamayı", "Eğitim verisini etiketlemeyi"],
        0,
        "İki varyantın gerçek davranış üzerindeki etkisi ölçülür.",
        "A B testi, iki uygulama veya istem sürümünü ayrılmış trafik üzerinde karşılaştırarak hangisinin hedef ölçütte daha iyi olduğunu gösterir.",
        "Model değerlendirme"
      ),
      q(
        "Üretken AI uygulamasında gecikmeyi azaltmanın bir yolu hangisidir?",
        ["Görev için yeterli olan daha küçük ve hızlı modeli değerlendirmek", "Her isteme ilgisiz uzun belgeler eklemek", "Maksimum çıktıyı sınırsız yapmak", "Her yanıtta ince ayar başlatmak"],
        0,
        "En büyük model her zaman gerekli değildir.",
        "Görev kalitesini karşılayan daha küçük model, kısa bağlam ve uygun çıktı sınırı gecikme ile maliyeti azaltabilir.",
        "Performans ve maliyet"
      ),
      q(
        "Token maliyetini düşürmek için hangi yaklaşım uygundur?",
        ["Gereksiz bağlamı kaldırıp istem ve çıktıyı özlü tutmak", "Aynı belgeyi istemde birkaç kez tekrarlamak", "Her zaman en uzun yanıtı istemek", "Bütün geçmiş konuşmaları sınırsız eklemek"],
        0,
        "İşlenen girdi ve üretilen çıktı miktarını düşün.",
        "Daha kısa ve ilgili bağlam ile kontrollü çıktı uzunluğu, kaliteyi koruyarak işlenen token miktarını azaltabilir.",
        "Performans ve maliyet"
      ),
      q(
        "Bir RAG sisteminde getirme kalitesi düşükse ilk hangi bileşen incelenmelidir?",
        ["Parçalama, gömme ve arama yapılandırması", "Yalnızca kullanıcı ekranının rengi", "IAM kullanıcı adı uzunluğu", "S3 fatura adresi"],
        0,
        "Yanlış belge parçaları modele geliyorsa üretimden önceki aşamaya bak.",
        "Getirme başarısı parça boyutu, meta veri filtreleri, gömme modeli ve arama yöntemiyle yakından ilişkilidir.",
        "RAG"
      ),
      q(
        "Üretim ortamında kullanıcı geri bildirimi ne için kullanılmalıdır?",
        ["Hata örüntülerini bulup değerlendirme veri kümesini geliştirmek", "Her geri bildirimi doğrulamadan eğitim verisine eklemek", "Denetim günlüklerini silmek", "Erişim kontrollerini kaldırmak"],
        0,
        "Geri bildirimi kontrollü bir iyileştirme döngüsüne bağla.",
        "İncelenen geri bildirimler hata türlerini ortaya çıkarabilir, yeni test örnekleri oluşturabilir ve güvenli iyileştirmeleri yönlendirebilir.",
        "Model değerlendirme"
      ),
    ],
  },
  {
    id: 3,
    title: "AWS AI servisleri",
    description: "Hazır AI servisleri ile depolama, analiz ve makine öğrenmesi servislerini doğru eşleştir.",
    domain: "AWS AI SERVİSLERİ",
    questions: [
      q(
        "Bir şirket, müşteri yorumlarındaki duygu ve anahtar ifadeleri kod yazmadan çıkarmak istiyor. Hangi servis uygundur?",
        ["Amazon Comprehend", "Amazon Rekognition", "Amazon Polly", "Amazon Personalize"],
        0,
        "Metin içindeki anlam ve duygu analizine odaklanan servisi düşün.",
        "Amazon Comprehend, metinlerden duygu, varlık, anahtar ifade ve başka doğal dil bilgileri çıkarır.",
        "AWS servis seçimi"
      ),
      q(
        "Taranmış faturalardaki tablo ve form alanlarını çıkarmak için hangi servis kullanılmalıdır?",
        ["Amazon Textract", "Amazon Translate", "Amazon Transcribe", "Amazon Lex"],
        0,
        "Belge metni ile yapısını birlikte çıkaran servisi düşün.",
        "Amazon Textract, taranmış belgelerden metin, el yazısı, form alanları ve tablolar çıkarabilir.",
        "AWS servis seçimi"
      ),
      q(
        "Çağrı merkezi ses kayıtlarını yazıya dönüştürmek için en uygun servis hangisidir?",
        ["Amazon Transcribe", "Amazon Polly", "Amazon Translate", "Amazon Rekognition"],
        0,
        "Ses girdisini metin çıktısına çeviren servisi seç.",
        "Amazon Transcribe otomatik konuşma tanıma kullanarak sesi metne dönüştürür.",
        "AWS servis seçimi"
      ),
      q(
        "Bir eğitim uygulamasında metni doğal sesli anlatıma çevirmek için hangi servis kullanılmalıdır?",
        ["Amazon Polly", "Amazon Comprehend", "Amazon Textract", "Amazon Personalize"],
        0,
        "Metinden konuşmaya dönüşümü düşün.",
        "Amazon Polly, metni gerçeğe yakın konuşmaya dönüştüren bir metinden sese servisidir.",
        "AWS servis seçimi"
      ),
      q(
        "Ürün açıklamalarını İngilizceden Türkçeye otomatik çevirmek için hangi servis uygundur?",
        ["Amazon Translate", "Amazon Transcribe", "Amazon Lex", "Amazon SageMaker AI"],
        0,
        "İki doğal dil arasında dönüşüm gerekiyor.",
        "Amazon Translate, desteklenen diller arasında otomatik metin çevirisi sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Görsellerde nesne, yüz veya uygunsuz içerik tespit etmek için hangi servis kullanılır?",
        ["Amazon Rekognition", "Amazon Comprehend", "Amazon Polly", "AWS Glue"],
        0,
        "Adında yeniden tanıma anlamını taşıyan görüntü servisini düşün.",
        "Amazon Rekognition görüntü ve videolarda nesne, yüz, metin ve uygunsuz içerik analizi yapabilir.",
        "AWS servis seçimi"
      ),
      q(
        "Sesli ve yazılı konuşma botu oluşturmak isteyen ekip hangi AWS servisini seçmelidir?",
        ["Amazon Lex", "Amazon Textract", "Amazon Macie", "Amazon Redshift"],
        0,
        "Bu servis konuşma arayüzlerinin yapı taşlarını sağlar.",
        "Amazon Lex, konuşma tanıma ve doğal dil anlama yetenekleriyle sohbet botları oluşturmayı sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Bir medya platformu her kullanıcıya kişiselleştirilmiş içerik önermek istiyor. Hangi servis uygundur?",
        ["Amazon Personalize", "Amazon Polly", "Amazon Translate", "AWS Artifact"],
        0,
        "Kullanıcı davranışına göre öneri veren yönetilen servisi düşün.",
        "Amazon Personalize, uygulamalara gerçek zamanlı kişiselleştirilmiş öneriler eklemek için kullanılır.",
        "AWS servis seçimi"
      ),
      q(
        "Veri bilimciler özel bir makine öğrenmesi modeli oluşturmak, eğitmek ve dağıtmak istiyor. Hangi servis en kapsamlı ortamı sağlar?",
        ["Amazon SageMaker AI", "Amazon Polly", "Amazon Lex", "AWS Artifact"],
        0,
        "Hazır bir AI API yerine uçtan uca ML platformu aranıyor.",
        "Amazon SageMaker AI, özel makine öğrenmesi modellerini hazırlama, oluşturma, eğitme ve dağıtma yetenekleri sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Amazon SageMaker JumpStart ne sağlar?",
        ["Önceden eğitilmiş modeller ve hazır çözüm başlangıçları", "Yalnızca ağ güvenlik duvarı", "Alan adı kaydı", "Ses dosyası depolama"],
        0,
        "Adındaki JumpStart hızlı başlangıcı anlatır.",
        "SageMaker JumpStart, önceden eğitilmiş modelleri ve çözüm şablonlarını keşfedip daha hızlı kullanmaya başlamayı sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Bir ekip, altyapı yönetmeden farklı sağlayıcılara ait temel modellere tek API üzerinden erişmek istiyor. Hangi servis uygundur?",
        ["Amazon Bedrock", "Amazon EC2 Auto Scaling", "Amazon RDS", "AWS Data Exchange"],
        0,
        "AWS üzerinde yönetilen temel model servisini düşün.",
        "Amazon Bedrock, çeşitli temel modellere ve üretken AI geliştirme yeteneklerine yönetilen erişim sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Anlamsal arama için gömme vektörlerini indekslemek isteyen ekip hangi servisten yararlanabilir?",
        ["Amazon OpenSearch Service", "Amazon Polly", "Amazon Transcribe", "AWS Budgets"],
        0,
        "Arama ve vektör indeksleme yeteneği olan servisi düşün.",
        "Amazon OpenSearch Service, vektör indeksleri ve benzerlik aramasıyla anlamsal arama çözümlerini destekler.",
        "AWS servis seçimi"
      ),
      q(
        "Amazon S3 içindeki hassas verileri keşfetmek için hangi servis kullanılır?",
        ["Amazon Macie", "Amazon Lex", "Amazon Personalize", "Amazon Polly"],
        0,
        "Bu güvenlik servisi S3 verilerini hassasiyet açısından inceler.",
        "Amazon Macie, makine öğrenmesi ve örüntü eşleme kullanarak Amazon S3 içindeki hassas verileri keşfeder.",
        "AWS servis seçimi"
      ),
      q(
        "Model eğitim verilerini dayanıklı bir nesne deposunda saklamak için hangi servis uygundur?",
        ["Amazon S3", "Amazon Lex", "Amazon Polly", "AWS IAM"],
        0,
        "AWS nesne depolama servisini seç.",
        "Amazon S3, eğitim verileri ve model çıktıları gibi nesneler için ölçeklenebilir ve dayanıklı depolama sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Sunucu yönetmeden bir Bedrock isteğini olay üzerine tetiklemek için hangi işlem servisi uygundur?",
        ["AWS Lambda", "Amazon EC2", "Amazon Redshift", "AWS Artifact"],
        0,
        "Olay odaklı ve sunucusuz kod çalıştırmayı düşün.",
        "AWS Lambda, sunucu yönetmeden olaylar üzerine kod çalıştırabilir ve Bedrock gibi servisleri çağırabilir.",
        "AWS servis seçimi"
      ),
      q(
        "AI uygulamasının gecikme ve hata metriklerini izlemek için hangi servis kullanılmalıdır?",
        ["Amazon CloudWatch", "Amazon Translate", "Amazon Textract", "AWS Data Exchange"],
        0,
        "Metrik, günlük ve alarm servisidir.",
        "Amazon CloudWatch uygulama ve AWS kaynaklarından metrik, günlük ve olay toplayarak izleme sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Yapılandırılmış analitik veriler üzerinde büyük ölçekli SQL sorguları çalıştırmak için hangi servis uygundur?",
        ["Amazon Redshift", "Amazon Polly", "Amazon Rekognition", "AWS Secrets Manager"],
        0,
        "Bulut veri ambarı servisini düşün.",
        "Amazon Redshift, büyük ölçekli analitik iş yükleri için yönetilen veri ambarı yetenekleri sağlar.",
        "AWS servis seçimi"
      ),
      q(
        "Veri kataloglama ve ayıklama, dönüştürme, yükleme süreçleri için hangi servis uygundur?",
        ["AWS Glue", "Amazon Lex", "Amazon Polly", "AWS KMS"],
        0,
        "Veri bütünleştirme servisini düşün.",
        "AWS Glue, veri keşfi, kataloglama ve ayıklama, dönüştürme, yükleme işleri için yönetilen veri bütünleştirme yetenekleri sunar.",
        "AWS servis seçimi"
      ),
      q(
        "Kod yazmadan veri kalitesi sorunlarını görsel olarak temizlemek ve dönüştürmek için hangi araç uygundur?",
        ["AWS Glue DataBrew", "Amazon Transcribe", "Amazon Rekognition", "AWS CloudTrail"],
        0,
        "Glue ailesindeki görsel veri hazırlama aracını düşün.",
        "AWS Glue DataBrew, veri analistlerinin kod yazmadan veriyi keşfetmesine, temizlemesine ve dönüştürmesine yardım eder.",
        "AWS servis seçimi"
      ),
      q(
        "Bir kuruluş, hazır AI API kullanmak yerine kendi özel algoritmasını tam kontrolle çalıştırmak istiyor. En uygun genel yaklaşım hangisidir?",
        ["Amazon SageMaker AI üzerinde özel model geliştirmek", "Amazon Polly ile ses üretmek", "Amazon Translate ile metni çevirmek", "AWS Artifact ile rapor indirmek"],
        0,
        "İş gereksinimi özel model ve yaşam döngüsü kontrolüdür.",
        "Özel algoritma, eğitim ve dağıtım kontrolü gerekiyorsa SageMaker AI hazır amaçlı AI servislerinden daha uygun bir platformdur.",
        "AWS servis seçimi"
      ),
    ],
  },
  {
    id: 4,
    title: "Amazon Bedrock",
    description: "Model erişimi, bilgi tabanları, ajanlar, koruma katmanları ve çalışma seçenekleri.",
    domain: "AMAZON BEDROCK",
    questions: [
      q(
        "Amazon Bedrock en doğru nasıl tanımlanır?",
        ["Temel modellerle üretken AI uygulamaları geliştirmek için yönetilen servis", "Yalnızca ilişkisel veritabanı", "Fiziksel robot yönetim sistemi", "Alan adı kayıt servisi"],
        0,
        "Temel modeller ve yönetilen altyapı anahtar kavramlardır.",
        "Amazon Bedrock, çeşitli temel modelleri ve üretken AI uygulama bileşenlerini sunan tam yönetilen bir servistir.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock kullanmanın önemli bir yararı nedir?",
        ["Altyapıyı yönetmeden farklı temel modelleri deneyebilmek", "Tüm modellerin aynı yetenekte olması", "Her kullanımda model eğitmenin zorunlu olması", "Yalnızca AWS tarafından üretilen modellere erişim"],
        0,
        "Model seçimi ve yönetilen hizmet avantajını düşün.",
        "Bedrock, AWS ve üçüncü taraf sağlayıcıların modellerini yönetilen API üzerinden karşılaştırmayı ve kullanmayı kolaylaştırır.",
        "Amazon Bedrock"
      ),
      q(
        "Bir ekip modeli kod yazmadan istemlerle denemek istiyor. Bedrock içindeki hangi özellik uygundur?",
        ["Playground", "AWS Artifact", "S3 Glacier", "VPC Flow Logs"],
        0,
        "Konsolda etkileşimli model deneme alanını düşün.",
        "Bedrock Playground, modelleri ve çıkarım ayarlarını örnek istemlerle etkileşimli biçimde denemeyi sağlar.",
        "Amazon Bedrock"
      ),
      q(
        "Amazon Bedrock Guardrails ne için kullanılır?",
        ["İstenmeyen içerik ve konular için koruma politikaları uygulamak", "Model sunucularına fiziksel erişim vermek", "Veri ambarı sorgulamak", "DNS kayıtlarını değiştirmek"],
        0,
        "Girdi ve çıktılara güvenlik sınırı koymayı düşün.",
        "Bedrock Guardrails, zararlı içerik, reddedilen konular ve hassas bilgi gibi alanlarda yapılandırılabilir koruma uygular.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock Knowledge Bases özelliğinin temel kullanım amacı nedir?",
        ["RAG iş akışını yöneterek kurumsal verilerle temellendirilmiş yanıtlar üretmek", "EC2 işletim sistemini yamalamak", "Kullanıcı parolalarını depolamak", "Ses dosyalarını konuşmaya çevirmek"],
        0,
        "Bilgi getirme ve üretimi birleştiren yaklaşımı düşün.",
        "Bedrock Knowledge Bases, veri kaynaklarını alıp ilgili parçaları getirerek temel model yanıtlarını kurumsal bilgiyle temellendirir.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock Agents hangi ihtiyaca yanıt verir?",
        ["Modelin araç ve API kullanarak çok adımlı görevleri yürütmesine", "Yalnızca görsel depolamaya", "Fiziksel sunucu kurulumuna", "DNS önbelleğini temizlemeye"],
        0,
        "Sadece metin üretmek yerine eylem planlamayı düşün.",
        "Bedrock Agents, temel modelin talebi yorumlamasına, adımları düzenlemesine ve tanımlı eylem grupları ile bilgi kaynaklarını kullanmasına yardımcı olur.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock Model Evaluation neyi kolaylaştırır?",
        ["Modelleri kalite ve sorumlu AI ölçütleriyle karşılaştırmayı", "IAM kullanıcılarını silmeyi", "Nesneleri arşivlemeyi", "Alan adı satın almayı"],
        0,
        "Bir kullanım senaryosu için model seçmeden önce kıyaslama gerekir.",
        "Model değerlendirme, otomatik ölçütler veya insan değerlendirmesiyle modellerin belirli veri ve görevlerde karşılaştırılmasını sağlar.",
        "Amazon Bedrock"
      ),
      q(
        "Trafiği düzensiz ve düşük olan yeni bir uygulama için hangi çıkarım seçeneği genellikle uygundur?",
        ["İstek üzerine çıkarım", "Sürekli ayrılmış fiziksel veri merkezi", "Her istek için ince ayar", "S3 Glacier geri yükleme"],
        0,
        "Kullanım kadar ödeme ve başlangıç esnekliğini düşün.",
        "İstek üzerine çıkarım, önceden kapasite ayırmadan değişken trafik için esnek başlangıç sağlar.",
        "Amazon Bedrock"
      ),
      q(
        "Kararlı ve yüksek hacimli bir iş yükünde belirli kapasite ihtiyacı varsa hangi seçenek değerlendirilebilir?",
        ["Provisioned Throughput", "S3 Glacier Deep Archive", "Amazon Route 53", "AWS Artifact"],
        0,
        "Önceden ayrılmış model kapasitesini düşün.",
        "Provisioned Throughput, desteklenen modeller için ayrılmış çıkarım kapasitesi sunar ve öngörülebilir yüksek hacimli iş yüklerine uygundur.",
        "Amazon Bedrock"
      ),
      q(
        "Gerçek zamanlı yanıt gerektirmeyen çok sayıda istemi daha uygun maliyetle işlemek için hangi yaklaşım kullanılabilir?",
        ["Toplu çıkarım", "Her istemde model eğitimi", "Yalnızca sohbet Playground", "Manuel ekran görüntüsü"],
        0,
        "İstekleri çevrim dışı bir iş olarak birlikte işlemeyi düşün.",
        "Toplu çıkarım, gecikmeye duyarlı olmayan büyük girdi kümelerini asenkron olarak işlemek için uygundur.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock Prompt Management özelliği ne sağlar?",
        ["İstemleri oluşturma, sürümleme ve yeniden kullanma", "KMS anahtarlarını fiziksel olarak üretme", "Model ağırlıklarını herkese açma", "Ağ paketlerini yönlendirme"],
        0,
        "İstem yaşam döngüsünü düşün.",
        "Prompt Management, istem şablonlarının yönetilmesini, değişkenlerle kullanılmasını ve sürümler halinde saklanmasını kolaylaştırır.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock kullanıcı verileriyle ilgili en doğru ifade hangisidir?",
        ["İstemler ve çıktılar temel modelleri eğitmek için model sağlayıcılarla paylaşılmaz", "Her istem herkese açık veri kümesine eklenir", "Tüm veriler zorunlu olarak tek Bölgede işlenir", "Kullanıcı verileri hiçbir şekilde şifrelenemez"],
        0,
        "Yönetilen servisin veri koruma yaklaşımını düşün.",
        "AWS, Bedrock girdilerini ve çıktılarını temel modelleri eğitmek için kullanmaz ve bunları model sağlayıcılarla paylaşmaz.",
        "Amazon Bedrock"
      ),
      q(
        "Belirli bir ekibin yalnızca onaylı Bedrock modelini çağırabilmesi için hangi AWS özelliği kullanılmalıdır?",
        ["IAM politikaları", "Amazon Polly sesleri", "S3 yaşam döngüsü", "AWS Budgets raporu"],
        0,
        "Kim hangi kaynağa hangi eylemi yapabilir sorusunu düşün.",
        "IAM politikaları, Bedrock kaynakları ve model çağırma eylemleri için ayrıntılı erişim denetimi sağlar.",
        "Amazon Bedrock"
      ),
      q(
        "Kuruma özgü sık değişen politika belgeleriyle yanıt veren asistan için en uygun Bedrock yaklaşımı hangisidir?",
        ["Knowledge Bases ile RAG", "Her belge değişiminde temel modeli baştan eğitmek", "Yalnızca temperature artırmak", "Metni görüntüye dönüştürmek"],
        0,
        "Güncel bilgiye dış kaynaktan erişim gerekir.",
        "RAG, değişen belgeleri bilgi kaynağından getirerek yanıtı güncel içerikle temellendirir ve sürekli model eğitimi ihtiyacını azaltır.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock Flows hangi sorunu çözmeye yardımcı olur?",
        ["Modeller, istemler ve AWS hizmetleri arasında üretken AI iş akışı düzenlemek", "Fiziksel ağ kablosu yönetmek", "S3 depolama sınıfı seçmek", "Alan adı kaydetmek"],
        0,
        "Birden fazla üretken AI adımını görsel olarak bağlamayı düşün.",
        "Bedrock Flows, istem, model, bilgi tabanı ve diğer bileşenleri birbirine bağlayan üretken AI iş akışları kurmayı kolaylaştırır.",
        "Amazon Bedrock"
      ),
      q(
        "Farklı temel modeller arasından seçim yaparken en iyi yaklaşım hangisidir?",
        ["Gerçek kullanım verisiyle kalite, gecikme ve maliyeti birlikte değerlendirmek", "Her zaman en büyük modeli seçmek", "Yalnızca sağlayıcının adına bakmak", "Temperature değeri en yüksek modeli seçmek"],
        0,
        "Tek bir ölçüt tüm iş gereksinimlerini karşılamaz.",
        "Model seçimi görev kalitesi, gecikme, maliyet, bağlam kapasitesi ve uyumluluk gibi birden fazla gereksinime göre yapılmalıdır.",
        "Amazon Bedrock"
      ),
      q(
        "Amazon Nova nedir?",
        ["Amazon tarafından sunulan bir temel model ailesi", "Yalnızca S3 şifreleme türü", "Bir ilişkisel veritabanı motoru", "AWS destek planı"],
        0,
        "Bedrock model kataloğunda yer alan Amazon markalı modeli düşün.",
        "Amazon Nova, Bedrock üzerinden erişilebilen ve farklı üretken AI görevlerini destekleyen Amazon temel model ailesidir.",
        "Amazon Bedrock"
      ),
      q(
        "Bir Bedrock ajanının harici rezervasyon API'sini çağırması için ne tanımlanmalıdır?",
        ["Eylem grubu", "S3 yaşam döngüsü", "CloudFront dağıtımı", "Redshift görünümü"],
        0,
        "Ajanın gerçekleştirebileceği işlemler bir grup içinde tarif edilir.",
        "Eylem grupları, ajanın bir görevi tamamlamak için çağırabileceği işlevleri ve API şemalarını tanımlar.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock model çağrı günlükleri hangi amaçla etkinleştirilebilir?",
        ["Sorun giderme ve denetim için girdi, çıktı ve çağrı ayrıntılarını izlemek", "Modeli otomatik olarak halka açmak", "IAM gereksinimini kaldırmak", "Her çıktıyı doğru kabul etmek"],
        0,
        "Gözlemlenebilirlik ve denetim izini düşün.",
        "Yapılandırılan model çağrı günlükleri, kullanımın izlenmesine ve sorunların incelenmesine yardım eder. Hassas veri riskleri için günlük yapılandırması dikkatle yönetilmelidir.",
        "Amazon Bedrock"
      ),
      q(
        "Bedrock Guardrails kullanmak hangi gereksinimi ortadan kaldırmaz?",
        ["Uygulamaya özgü test ve insan gözetimini", "İçerik filtreleme politikasını", "Reddedilen konu tanımını", "Hassas bilgi filtresi yapılandırmasını"],
        0,
        "Tek bir kontrol tüm riskleri tek başına çözmez.",
        "Guardrails güçlü bir savunma katmanıdır ancak uygulama testi, erişim kontrolü, izleme ve gerektiğinde insan gözetimi yine gerekir.",
        "Amazon Bedrock"
      ),
    ],
  },
  {
    id: 2,
    title: "Üretken AI temelleri",
    description: "Temel modeller, token, bağlam, gömme, üretim ayarları ve yaygın sınırlamalar.",
    domain: "ÜRETKEN AI TEMELLERİ",
    questions: [
      q(
        "Üretken yapay zekanın ayırt edici özelliği nedir?",
        ["Öğrendiği örüntülere dayanarak yeni içerik üretmesi", "Yalnızca kayıtları sıralaması", "Her zaman sabit kurallar izlemesi", "Sadece sayısal tahmin yapması"],
        0,
        "Metin, görüntü ve ses gibi yeni çıktıları düşün.",
        "Üretken AI, eğitim verisindeki örüntülerden yararlanarak yeni metin, görüntü, ses veya başka içerikler oluşturur.",
        "Üretken AI temelleri"
      ),
      q(
        "Temel model kavramı neyi ifade eder?",
        ["Geniş veriyle eğitilip birçok göreve uyarlanabilen büyük modeli", "Tek bir müşteri için yazılan sabit kuralı", "Yalnızca veritabanı indeksini", "Donanım izleme aracını"],
        0,
        "Aynı modelin farklı aşağı akış görevlerine uyarlanabildiğini düşün.",
        "Temel modeller geniş veri üzerinde önceden eğitilir ve özetleme, soru yanıtlama veya üretim gibi birçok göreve uyarlanabilir.",
        "Üretken AI temelleri"
      ),
      q(
        "Büyük dil modelinde token nedir?",
        ["Metnin model tarafından işlenen parçası", "Modelin fiziksel sunucusu", "Yalnızca tam bir paragraf", "Şifreleme anahtarının kendisi"],
        0,
        "Bir kelime bazen birden fazla parçaya ayrılabilir.",
        "Token, modelin metni işlerken kullandığı kelime, kelime parçası veya işaret gibi temel birimdir.",
        "Üretken AI temelleri"
      ),
      q(
        "Transformer mimarisinde attention mekanizmasının temel yararı nedir?",
        ["Girdinin farklı bölümleri arasındaki ilişkileri ağırlıklandırmak", "Veriyi kalıcı olarak şifrelemek", "Modeli internete bağlamak", "Her yanıtı aynı yapmak"],
        0,
        "Model bir sözcüğü yorumlarken diğer sözcüklere ne kadar bakacağını belirler.",
        "Attention, modelin çıktı üretirken girdinin ilgili parçalarına farklı ağırlıklar vermesini sağlar.",
        "Üretken AI temelleri"
      ),
      q(
        "Bir modelin bağlam penceresi neyi sınırlar?",
        ["Tek istekte dikkate alabileceği token miktarını", "Kullanabileceği AWS Bölgesi sayısını", "Eğitimdeki kullanıcı sayısını", "Şifreleme anahtarının uzunluğunu"],
        0,
        "İstem ve çıktı için modelin çalışma belleğini düşün.",
        "Bağlam penceresi modelin bir etkileşimde işleyebildiği toplam token kapasitesini ifade eder.",
        "Üretken AI temelleri"
      ),
      q(
        "Bir dil modelinin kulağa ikna edici gelen ancak gerçekte yanlış bilgi üretmesine ne ad verilir?",
        ["Halüsinasyon", "Kümeleme", "Normalleştirme", "Şifreleme"],
        0,
        "Akıcı bir yanıt her zaman doğru olmayabilir.",
        "Halüsinasyon, üretken modelin desteklenmeyen veya hatalı bilgiyi güvenilir bir dille üretmesidir.",
        "Üretken AI temelleri"
      ),
      q(
        "Bir dil modelinde temperature değeri artırılırsa genel olarak ne beklenir?",
        ["Daha çeşitli ve daha az öngörülebilir çıktılar", "Daima daha kısa yanıtlar", "Modelin yeniden eğitilmesi", "Bağlam penceresinin büyümesi"],
        0,
        "Bu ayar olası sonraki tokenlar arasındaki seçim çeşitliliğini etkiler.",
        "Yüksek temperature, token seçimindeki rastlantısallığı artırır. Bu, yaratıcılığı artırabilir ancak tutarlılığı azaltabilir.",
        "Üretken AI temelleri"
      ),
      q(
        "Metin gömmesi nedir?",
        ["Metnin anlamını temsil eden sayısal vektör", "Metnin şifrelenmiş yedeği", "Modelin sistem istemi", "Bir ses dosyasının altyazısı"],
        0,
        "Benzer anlamdaki metinler uzayda birbirine yakın olur.",
        "Gömme, metin veya başka bir içeriğin anlamsal özelliklerini çok boyutlu sayısal vektörle temsil eder.",
        "Üretken AI temelleri"
      ),
      q(
        "Vektör araması neden anahtar kelime aramasından farklıdır?",
        ["Anlamsal benzerliğe göre ilgili içerik bulabilir", "Yalnızca tam eşleşme kabul eder", "Veriyi otomatik olarak etiketler", "Modeli yeniden eğitir"],
        0,
        "Aynı fikrin farklı kelimelerle anlatılabildiğini düşün.",
        "Vektör araması, içeriklerin gömmeleri arasındaki yakınlığı kullanarak kelimeler birebir eşleşmese de anlamsal olarak ilgili sonuçlar bulur.",
        "Üretken AI temelleri"
      ),
      q(
        "Diffusion modeli en sık hangi tür üretken görevle ilişkilidir?",
        ["Görüntü üretimi", "Tablo birleştirme", "IAM yetkilendirmesi", "DNS çözümleme"],
        0,
        "Gürültüden aşamalı olarak görsel oluşturmayı düşün.",
        "Diffusion modelleri özellikle metinden görüntü üretiminde yaygın olarak kullanılır.",
        "Üretken AI temelleri"
      ),
      q(
        "Çok modlu bir modelin temel özelliği nedir?",
        ["Metin ve görüntü gibi birden fazla veri türünü işleyebilmesi", "Yalnızca tek dilde çalışması", "Birden fazla AWS hesabına sahip olması", "Sadece yapılandırılmış veri üretmesi"],
        0,
        "Buradaki mod, veri biçimini ifade eder.",
        "Çok modlu modeller metin, görüntü, ses veya video gibi birden fazla veri biçimini anlayabilir ya da üretebilir.",
        "Üretken AI temelleri"
      ),
      q(
        "Ön eğitim aşamasının temel amacı nedir?",
        ["Büyük veri kümesinden genel örüntüler öğrenmek", "Tek bir kullanıcıya parola vermek", "Model günlüklerini arşivlemek", "Her üretimi insan onayına göndermek"],
        0,
        "Bu aşama özel bir iş görevinden önce gelir.",
        "Ön eğitim, modelin geniş bir veri kümesinden genel dil veya içerik örüntülerini öğrenmesini sağlar.",
        "Üretken AI temelleri"
      ),
      q(
        "Üretken modelde çıkarım ne zaman gerçekleşir?",
        ["Eğitilmiş model bir isteme yanıt üretirken", "Ham veri etiketlenirken", "Model ağırlıkları ilk kez öğrenilirken", "Sunucu kapatılırken"],
        0,
        "Kullanıcı istemine verilen yanıt anını düşün.",
        "Çıkarım, eğitilmiş modelin yeni bir girdi için çıktı oluşturduğu çalışma aşamasıdır.",
        "Üretken AI temelleri"
      ),
      q(
        "İstem mühendisliğinin amacı nedir?",
        ["İstenen çıktıyı almak için girdiyi etkili biçimde tasarlamak", "Model donanımını fiziksel olarak değiştirmek", "Veri tabanını otomatik şifrelemek", "Her zaman yeni model eğitmek"],
        0,
        "Talimat, bağlam ve çıktı biçimini düşün.",
        "İstem mühendisliği, model davranışını yönlendirmek için açık talimatlar, bağlam, örnekler ve çıktı biçimi kullanır.",
        "Üretken AI temelleri"
      ),
      q(
        "Aynı girdiye daha tutarlı yanıtlar almak için temperature ayarı nasıl değiştirilmelidir?",
        ["Düşürülmelidir", "Yükseltilmelidir", "Her istekte rastgele seçilmelidir", "Bağlam uzunluğuna eşitlenmelidir"],
        0,
        "Daha az rastlantısallık hedefleniyor.",
        "Daha düşük temperature, olasılığı yüksek tokenlara odaklanarak daha tutarlı ve öngörülebilir çıktılar üretir.",
        "Üretken AI temelleri"
      ),
      q(
        "Bir LLM için hangisi önemli bir sınırlamadır?",
        ["Yanıtların olgusal doğruluğunu kendiliğinden garanti etmemesi", "Hiç metin üretememesi", "Yalnızca tek kelimelik girdi alması", "Her görev için fiziksel robot gerektirmesi"],
        0,
        "Akıcı olmak ile doğru olmak aynı şey değildir.",
        "LLM çıktıları olgusal hata veya uydurma bilgi içerebilir. Kritik içerikler doğrulama ve gerektiğinde insan denetimi gerektirir.",
        "Üretken AI temelleri"
      ),
      q(
        "RAG yaklaşımının temel amacı nedir?",
        ["Yanıtı dış kaynaklardan getirilen ilgili bilgilerle temellendirmek", "Modeli her soruda baştan eğitmek", "Tüm yanıtları rastgeleleştirmek", "Veriyi yalnızca görsele çevirmek"],
        0,
        "Açılımındaki retrieval sözcüğünü düşün.",
        "Retrieval Augmented Generation, ilgili kaynakları getirip isteme ekleyerek yanıtın güncel veya kuruma özgü bilgilerle temellenmesini sağlar.",
        "Üretken AI temelleri"
      ),
      q(
        "İnce ayar hangi durumda RAG yaklaşımından daha uygun olabilir?",
        ["Modelin üslup ve görev davranışını kalıcı biçimde uyarlamak gerektiğinde", "Bilginin her saat değiştiği durumda", "Kaynak göstermek tek hedef olduğunda", "Hiç eğitim örneği bulunmadığında"],
        0,
        "Bilgi getirmek ile davranış öğretmek arasındaki farkı düşün.",
        "İnce ayar, örnekler üzerinden modelin davranışını veya üslubunu uyarlamak için uygundur. Güncel bilgiye erişim için çoğunlukla RAG daha uygundur.",
        "Üretken AI temelleri"
      ),
      q(
        "Uzun müşteri görüşmelerini kısa maddeler halinde sunmak hangi üretken AI görevidir?",
        ["Özetleme", "Kümeleme", "Anomali tespiti", "Nesne algılama"],
        0,
        "Amaç temel bilgiyi daha kısa biçimde korumaktır.",
        "Özetleme, uzun bir içeriğin ana noktalarını daha kısa bir çıktı halinde üretir.",
        "Üretken AI temelleri"
      ),
      q(
        "Bir üretken AI kullanım senaryosunun değerini değerlendirirken ilk bakılması gereken nedir?",
        ["Çözdüğü iş problemi ve ölçülebilir sonucu", "Yalnızca model parametre sayısı", "Model adının popülerliği", "En yüksek temperature değeri"],
        0,
        "Teknoloji seçimi iş sonucuna hizmet etmelidir.",
        "Başarılı AI girişimleri açık bir iş problemi, ölçülebilir hedef ve uygun risk değerlendirmesiyle başlar.",
        "Üretken AI temelleri"
      ),
    ],
  },
];
