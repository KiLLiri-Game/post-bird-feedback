/* POST BIRD feedback page — client-side translations and form helpers.
   This is a static GitHub Pages site. FormSubmit.co receives POST requests. */
(() => {
  const languages = {
    en: {
      name:'English', smallSign:'A little letter to the developer', title:'Report an issue', subtitle:'Noticed something unusual? Send a little letter — every report helps.',
      typeLabel:'What did you notice?', typeBug:'Bug or crash',typeVisual:'Visual issue',typeText:'Typo or translation',typeIdea:'Game suggestion',
      descriptionLabel:'Describe the problem *', descriptionPlaceholder:'What happened, and where exactly?', descriptionHelp:'Even a short explanation helps us find the issue.',
      stepsLabel:'How to reproduce (optional)',stepsPlaceholder:'What were you doing just before it happened?',
      emailLabel:'Your email (optional)',emailPlaceholder:"Only if you'd like a reply",emailHelp:'Only used if a reply is needed.',
      screenshotLabel:'Screenshot (optional)',screenshotChoose:'Choose a photo or drag it here',screenshotFormats:'PNG, JPG or WEBP · max. 9 MB', removeImage:'Remove image', send:'Send a letter',
      footerMessage:'A small indie project, made with care. Thanks for helping POST BIRD grow.',privacy:'Privacy',
      fileTooBig:'This image is too large. Please choose one smaller than 9 MB.', fileType:'Please choose a PNG, JPG or WEBP image.',localNotice:'To send a real report, open the published website (not a local HTML file).',
      thankTitle:'Your letter is on its way!',thankBody:'Thank you for helping make POST BIRD better. Your report has been submitted.',thankBack:'Write another letter',
      privacyTitle:'Privacy & feedback', privacyIntro:'This page collects only the information you choose to submit so the developer can review game issues and suggestions.',
      privacyDataTitle:'What is collected',privacyData:'Issue category, your description, optional reproduction steps, an optional screenshot and an optional reply email. Technical data may also be processed by the form provider.',
      privacyWhereTitle:'Where the message goes',privacyWhere:'The form is sent through FormSubmit.co, a third-party form service, and forwarded to the POST BIRD developer by email. GitHub Pages only hosts this website.',
      privacyWhyTitle:'How it is used',privacyWhy:'Your message is used to investigate issues, improve the game and, only if you provide an email, possibly reply. Please do not submit passwords or sensitive personal information.',
      privacyChoiceTitle:'Your choice',privacyChoice:'Providing an email and a screenshot is optional. For privacy questions or requests relating to a submitted report, provide an appropriate public contact method before publishing this page.',privacyBack:'Back to the form',
    },
    ru: {
      name:'Русский',smallSign:'Маленькое письмо разработчику',title:'Сообщить о проблеме',subtitle:'Заметили что-то необычное? Отправьте письмо — каждый отзыв помогает.',
      typeLabel:'Что вы заметили?',typeBug:'Ошибка или зависание',typeVisual:'Визуальный недочёт',typeText:'Опечатка или ошибка перевода',typeIdea:'Предложение по игре',
      descriptionLabel:'Опишите проблему *',descriptionPlaceholder:'Что произошло и где именно?',descriptionHelp:'Даже короткое описание поможет найти ошибку.',
      stepsLabel:'Как повторить ошибку (необязательно)',stepsPlaceholder:'Что вы делали перед этим?',
      emailLabel:'Ваша почта (необязательно)',emailPlaceholder:'Если хотите получить ответ',emailHelp:'Только для ответа, если он понадобится.',
      screenshotLabel:'Скриншот (необязательно)',screenshotChoose:'Выберите изображение или перетащите сюда',screenshotFormats:'PNG, JPG или WEBP · до 9 МБ',removeImage:'Удалить изображение',send:'Отправить письмо',
      footerMessage:'Маленькая инди-игра, созданная с заботой. Спасибо, что помогаете POST BIRD становиться лучше.',privacy:'Конфиденциальность',
      fileTooBig:'Изображение слишком большое. Выберите файл до 9 МБ.',fileType:'Выберите изображение PNG, JPG или WEBP.',localNotice:'Для настоящей отправки откройте опубликованный сайт, а не локальный HTML-файл.',
      thankTitle:'Письмо отправлено!',thankBody:'Спасибо, что помогаете делать POST BIRD лучше. Ваше сообщение отправлено.',thankBack:'Написать ещё письмо',
      privacyTitle:'Конфиденциальность',privacyIntro:'Эта страница собирает только те сведения, которые вы решите отправить, чтобы разработчик мог изучать ошибки и предложения.',
      privacyDataTitle:'Какие данные собираются',privacyData:'Тип обращения, описание, необязательные шаги воспроизведения, скриншот и адрес для ответа. Сервис обработки формы также может обрабатывать технические сведения.',
      privacyWhereTitle:'Куда отправляется сообщение',privacyWhere:'Сообщение обрабатывается сторонним сервисом FormSubmit.co и пересылается разработчику POST BIRD по почте. GitHub Pages только размещает сам сайт.',
      privacyWhyTitle:'Для чего используются данные',privacyWhy:'Сведения нужны для поиска ошибок и улучшения игры, а адрес почты — для возможного ответа. Не отправляйте пароли или чувствительную личную информацию.',
      privacyChoiceTitle:'Ваш выбор',privacyChoice:'Указывать почту и прикладывать скриншот необязательно. Перед публикацией сайта разработчик должен дополнить эту страницу контактными данными для запросов по персональным данным.',privacyBack:'Вернуться к форме',
    },
    'zh-CN': {
      name:'简体中文',smallSign:'给开发者的一封信',title:'反馈问题',subtitle:'发现了什么异常？给我们写封信吧，每条反馈都很重要。',
      typeLabel:'您发现了什么？',typeBug:'错误或崩溃',typeVisual:'画面问题',typeText:'错别字或翻译问题',typeIdea:'游戏建议',
      descriptionLabel:'请描述问题 *',descriptionPlaceholder:'发生了什么？具体在哪里？',descriptionHelp:'即使简短说明也能帮助我们排查。',
      stepsLabel:'如何重现（选填）',stepsPlaceholder:'发生之前您进行了哪些操作？',
      emailLabel:'您的邮箱（选填）',emailPlaceholder:'如需回复，请填写邮箱',emailHelp:'仅在需要回复时使用。',
      screenshotLabel:'截图（选填）',screenshotChoose:'选择图片或拖放到此处',screenshotFormats:'PNG、JPG 或 WEBP · 不超过 9 MB',removeImage:'移除图片',send:'寄出信件',
      footerMessage:'这是一款用心制作的独立游戏。感谢您帮助 POST BIRD 变得更好。',privacy:'隐私说明',
      fileTooBig:'图片过大，请选择小于 9 MB 的文件。',fileType:'请选择 PNG、JPG 或 WEBP 图片。',localNotice:'请在已发布的网站上提交，而不要从本地 HTML 文件提交。',
      thankTitle:'信件已寄出！',thankBody:'感谢您帮助改进 POST BIRD。反馈已提交。',thankBack:'再写一封信',
      privacyTitle:'隐私与反馈',privacyIntro:'本页面仅收集您自愿提交的信息，以便开发者检查游戏问题与建议。',
      privacyDataTitle:'收集的信息',privacyData:'反馈类别、描述、可选的重现步骤、截图和回复邮箱。表单服务商也可能处理技术数据。',
      privacyWhereTitle:'信息发送到哪里',privacyWhere:'表单由第三方 FormSubmit.co 处理，并通过电子邮件转发给 POST BIRD 开发者。GitHub Pages 仅负责托管网页。',
      privacyWhyTitle:'信息用途',privacyWhy:'用于排查问题、改进游戏，并在您提供邮箱时回复。请不要发送密码或敏感个人信息。',
      privacyChoiceTitle:'您的选择',privacyChoice:'提供邮箱和截图均为自愿。发布网站前，开发者应补充隐私联系信息。',privacyBack:'返回表单',
    },
    es: {
      name:'Español',smallSign:'Una carta para quien desarrolla el juego',title:'Informar de un problema',subtitle:'¿Has notado algo extraño? Envíanos una carta: cada aviso ayuda.',
      typeLabel:'¿Qué has observado?',typeBug:'Error o bloqueo',typeVisual:'Problema visual',typeText:'Errata o traducción',typeIdea:'Sugerencia para el juego',
      descriptionLabel:'Describe el problema *',descriptionPlaceholder:'¿Qué ocurrió y dónde exactamente?',descriptionHelp:'Incluso una descripción breve puede ayudar.',
      stepsLabel:'Cómo reproducirlo (opcional)',stepsPlaceholder:'¿Qué estabas haciendo antes de que ocurriera?',
      emailLabel:'Tu correo (opcional)',emailPlaceholder:'Solo si quieres una respuesta',emailHelp:'Solo se usará si es necesario responder.',
      screenshotLabel:'Captura de pantalla (opcional)',screenshotChoose:'Selecciona una imagen o arrástrala aquí',screenshotFormats:'PNG, JPG o WEBP · máx. 9 MB',removeImage:'Quitar imagen',send:'Enviar carta',
      footerMessage:'Un pequeño juego independiente hecho con cariño. Gracias por ayudar a mejorar POST BIRD.',privacy:'Privacidad',
      fileTooBig:'La imagen es demasiado grande. Elige un archivo de menos de 9 MB.',fileType:'Elige una imagen PNG, JPG o WEBP.',localNotice:'Para enviarlo, abre el sitio publicado, no un archivo HTML local.',
      thankTitle:'¡Carta enviada!',thankBody:'Gracias por ayudar a mejorar POST BIRD. Tu mensaje se ha enviado.',thankBack:'Escribir otra carta',
      privacyTitle:'Privacidad y comentarios',privacyIntro:'Esta página recoge únicamente la información que decidas enviar para ayudar a investigar problemas y sugerencias del juego.',
      privacyDataTitle:'Datos recopilados',privacyData:'Tipo de problema, descripción, pasos opcionales, captura y correo opcional. El proveedor del formulario también puede procesar datos técnicos.',
      privacyWhereTitle:'Destino de tu mensaje',privacyWhere:'El mensaje pasa por FormSubmit.co, un servicio externo, y se reenvía por correo a la persona que desarrolla POST BIRD. GitHub Pages solo aloja la web.',
      privacyWhyTitle:'Uso de la información',privacyWhy:'Se utiliza para investigar errores, mejorar el juego y, si facilitas un correo, responder cuando sea necesario. No incluyas contraseñas ni datos sensibles.',
      privacyChoiceTitle:'Tú decides',privacyChoice:'El correo y la captura son opcionales. Antes de publicar, la persona responsable debe añadir datos de contacto para consultas de privacidad.',privacyBack:'Volver al formulario',
    },
    'pt-BR': {
      name:'Português (Brasil)',smallSign:'Uma cartinha para quem criou o jogo',title:'Relatar um problema',subtitle:'Notou algo estranho? Envie uma cartinha — cada relato ajuda.',
      typeLabel:'O que você encontrou?',typeBug:'Erro ou travamento',typeVisual:'Problema visual',typeText:'Erro de texto ou tradução',typeIdea:'Sugestão para o jogo',
      descriptionLabel:'Descreva o problema *',descriptionPlaceholder:'O que aconteceu e onde exatamente?',descriptionHelp:'Até uma descrição curta já ajuda.',
      stepsLabel:'Como reproduzir (opcional)',stepsPlaceholder:'O que você estava fazendo antes de acontecer?',
      emailLabel:'Seu e-mail (opcional)',emailPlaceholder:'Apenas se quiser uma resposta',emailHelp:'Usado somente se for necessário responder.',
      screenshotLabel:'Captura de tela (opcional)',screenshotChoose:'Escolha uma imagem ou arraste aqui',screenshotFormats:'PNG, JPG ou WEBP · até 9 MB',removeImage:'Remover imagem',send:'Enviar carta',
      footerMessage:'Um pequeno jogo independente feito com carinho. Obrigado por ajudar POST BIRD a crescer.',privacy:'Privacidade',
      fileTooBig:'A imagem é grande demais. Escolha um arquivo menor que 9 MB.',fileType:'Escolha uma imagem PNG, JPG ou WEBP.',localNotice:'Para enviar, abra o site publicado, não um arquivo HTML local.',
      thankTitle:'Sua carta foi enviada!',thankBody:'Obrigado por ajudar a melhorar POST BIRD. Sua mensagem foi enviada.',thankBack:'Escrever outra carta',
      privacyTitle:'Privacidade e feedback',privacyIntro:'Esta página coleta apenas as informações que você decidir enviar para ajudar a investigar problemas e sugestões.',
      privacyDataTitle:'Dados coletados',privacyData:'Categoria, descrição, etapas opcionais, imagem e e-mail opcional. O serviço do formulário também pode processar dados técnicos.',
      privacyWhereTitle:'Para onde vai a mensagem',privacyWhere:'A mensagem é processada pelo serviço externo FormSubmit.co e encaminhada por e-mail à pessoa que desenvolve POST BIRD. O GitHub Pages apenas hospeda o site.',
      privacyWhyTitle:'Como os dados são usados',privacyWhy:'Para investigar problemas, melhorar o jogo e, se houver e-mail, responder quando necessário. Não envie senhas nem dados pessoais sensíveis.',
      privacyChoiceTitle:'Sua escolha',privacyChoice:'O e-mail e a imagem são opcionais. Antes da publicação, é preciso informar um contato para questões de privacidade.',privacyBack:'Voltar ao formulário',
    },
    de: {
      name:'Deutsch',smallSign:'Ein kleiner Brief an die Entwicklung',title:'Problem melden',subtitle:'Etwas Ungewöhnliches entdeckt? Schreib einen Brief – jede Meldung hilft.',
      typeLabel:'Was ist dir aufgefallen?',typeBug:'Fehler oder Absturz',typeVisual:'Grafikfehler',typeText:'Tipp- oder Übersetzungsfehler',typeIdea:'Spielvorschlag',
      descriptionLabel:'Problem beschreiben *',descriptionPlaceholder:'Was ist passiert und wo genau?',descriptionHelp:'Auch eine kurze Beschreibung hilft bei der Fehlersuche.',
      stepsLabel:'Schritte zum Nachstellen (optional)',stepsPlaceholder:'Was hast du unmittelbar davor gemacht?',
      emailLabel:'Deine E-Mail (optional)',emailPlaceholder:'Nur, wenn du eine Antwort möchtest',emailHelp:'Wird nur bei Bedarf für eine Antwort genutzt.',
      screenshotLabel:'Screenshot (optional)',screenshotChoose:'Bild auswählen oder hierher ziehen',screenshotFormats:'PNG, JPG oder WEBP · max. 9 MB',removeImage:'Bild entfernen',send:'Brief abschicken',
      footerMessage:'Ein kleines Indie-Spiel, mit Liebe gemacht. Danke, dass du POST BIRD hilfst.',privacy:'Datenschutz',
      fileTooBig:'Das Bild ist zu groß. Bitte eine Datei unter 9 MB wählen.',fileType:'Bitte ein PNG-, JPG- oder WEBP-Bild wählen.',localNotice:'Zum Absenden bitte die veröffentlichte Website statt einer lokalen HTML-Datei öffnen.',
      thankTitle:'Dein Brief ist unterwegs!',thankBody:'Danke, dass du POST BIRD verbesserst. Deine Nachricht wurde abgesendet.',thankBack:'Noch einen Brief schreiben',
      privacyTitle:'Datenschutz und Feedback',privacyIntro:'Diese Seite erfasst nur die Angaben, die du freiwillig absendest, damit Fehler und Vorschläge geprüft werden können.',
      privacyDataTitle:'Erfasste Angaben',privacyData:'Kategorie, Beschreibung, optionale Schritte, optionales Bild und optionale E-Mail. Der Formulardienst kann auch technische Daten verarbeiten.',
      privacyWhereTitle:'Empfänger der Nachricht',privacyWhere:'Das Formular wird über den Drittanbieter FormSubmit.co verarbeitet und per E-Mail an die Entwicklung von POST BIRD weitergeleitet. GitHub Pages hostet nur die Website.',
      privacyWhyTitle:'Verwendung',privacyWhy:'Die Daten helfen, Fehler zu untersuchen und das Spiel zu verbessern. Falls du eine E-Mail angibst, ist auch eine Rückfrage möglich. Bitte keine Passwörter oder sensiblen Daten senden.',
      privacyChoiceTitle:'Freiwillige Angaben',privacyChoice:'E-Mail und Screenshot sind freiwillig. Vor Veröffentlichung sind Kontaktangaben für Datenschutzanfragen zu ergänzen.',privacyBack:'Zurück zum Formular',
    },
    fr: {
      name:'Français',smallSign:'Un petit courrier pour le développement',title:'Signaler un problème',subtitle:'Vous avez remarqué quelque chose ? Envoyez une lettre : chaque retour compte.',
      typeLabel:'Qu’avez-vous remarqué ?',typeBug:'Bug ou plantage',typeVisual:'Problème visuel',typeText:'Faute ou traduction',typeIdea:'Suggestion de jeu',
      descriptionLabel:'Décrivez le problème *',descriptionPlaceholder:'Que s’est-il passé, et où exactement ?',descriptionHelp:'Même une courte description est utile.',
      stepsLabel:'Comment reproduire (facultatif)',stepsPlaceholder:'Que faisiez-vous juste avant ?',
      emailLabel:'Votre adresse e-mail (facultatif)',emailPlaceholder:'Seulement si vous souhaitez une réponse',emailHelp:'Utilisée uniquement si une réponse est nécessaire.',
      screenshotLabel:'Capture d’écran (facultatif)',screenshotChoose:'Choisissez une image ou glissez-la ici',screenshotFormats:'PNG, JPG ou WEBP · 9 Mo maximum',removeImage:'Retirer l’image',send:'Envoyer la lettre',
      footerMessage:'Un petit jeu indépendant créé avec soin. Merci d’aider POST BIRD à grandir.',privacy:'Confidentialité',
      fileTooBig:'Image trop volumineuse. Choisissez un fichier de moins de 9 Mo.',fileType:'Choisissez une image PNG, JPG ou WEBP.',localNotice:'Pour envoyer votre message, ouvrez le site publié, pas un fichier HTML local.',
      thankTitle:'Votre lettre est partie !',thankBody:'Merci d’aider à améliorer POST BIRD. Votre message a été envoyé.',thankBack:'Écrire une autre lettre',
      privacyTitle:'Confidentialité et retours',privacyIntro:'Cette page recueille uniquement les informations que vous choisissez de transmettre pour examiner des problèmes et suggestions.',
      privacyDataTitle:'Informations recueillies',privacyData:'Catégorie, description, étapes facultatives, capture et adresse e-mail facultative. Le service de formulaire peut aussi traiter des données techniques.',
      privacyWhereTitle:'Où va votre message',privacyWhere:'Votre message passe par FormSubmit.co, un service tiers, puis est transmis par e-mail à la personne qui développe POST BIRD. GitHub Pages héberge seulement le site.',
      privacyWhyTitle:'Utilisation',privacyWhy:'Ces informations servent à rechercher les bugs, améliorer le jeu et éventuellement vous répondre si vous avez donné votre adresse. N’envoyez pas de mots de passe ni de données sensibles.',
      privacyChoiceTitle:'C’est votre choix',privacyChoice:'L’adresse e-mail et la capture sont facultatives. Avant la publication, un contact pour les questions de confidentialité doit être ajouté.',privacyBack:'Retour au formulaire',
    },
    pl: {
      name:'Polski',smallSign:'Mały list do twórcy gry',title:'Zgłoś problem',subtitle:'Coś wygląda nie tak? Wyślij mały list — każda wiadomość pomaga.',
      typeLabel:'Co zauważono?',typeBug:'Błąd lub zawieszenie',typeVisual:'Błąd graficzny',typeText:'Literówka lub tłumaczenie',typeIdea:'Pomysł na grę',
      descriptionLabel:'Opisz problem *',descriptionPlaceholder:'Co się stało i w którym miejscu?',descriptionHelp:'Nawet krótki opis może pomóc.',
      stepsLabel:'Jak odtworzyć błąd (opcjonalnie)',stepsPlaceholder:'Co robiono tuż przed wystąpieniem błędu?',
      emailLabel:'Twój e-mail (opcjonalnie)',emailPlaceholder:'Tylko jeśli chcesz otrzymać odpowiedź',emailHelp:'Używany wyłącznie w razie potrzeby odpowiedzi.',
      screenshotLabel:'Zrzut ekranu (opcjonalnie)',screenshotChoose:'Wybierz obraz lub przeciągnij go tutaj',screenshotFormats:'PNG, JPG lub WEBP · maks. 9 MB',removeImage:'Usuń obraz',send:'Wyślij list',
      footerMessage:'Mała niezależna gra tworzona z sercem. Dziękujemy za pomoc w rozwijaniu POST BIRD.',privacy:'Prywatność',
      fileTooBig:'Obraz jest za duży. Wybierz plik mniejszy niż 9 MB.',fileType:'Wybierz obraz PNG, JPG lub WEBP.',localNotice:'Aby wysłać zgłoszenie, otwórz opublikowaną stronę, a nie lokalny plik HTML.',
      thankTitle:'List został wysłany!',thankBody:'Dziękujemy za pomoc w ulepszaniu POST BIRD. Wiadomość została wysłana.',thankBack:'Napisz kolejny list',
      privacyTitle:'Prywatność i zgłoszenia',privacyIntro:'Strona zbiera tylko dane, które zdecydujesz się przesłać, aby pomóc w sprawdzaniu błędów i sugestii.',
      privacyDataTitle:'Jakie dane są zbierane',privacyData:'Rodzaj zgłoszenia, opis, opcjonalne kroki odtworzenia, obraz i adres e-mail. Dostawca formularza może też przetwarzać dane techniczne.',
      privacyWhereTitle:'Dokąd trafia wiadomość',privacyWhere:'Wiadomość jest obsługiwana przez zewnętrzny serwis FormSubmit.co i wysyłana e-mailem do osoby tworzącej POST BIRD. GitHub Pages udostępnia tylko stronę.',
      privacyWhyTitle:'Wykorzystanie danych',privacyWhy:'Dane służą do analizy błędów, ulepszania gry i ewentualnej odpowiedzi, jeśli podasz e-mail. Nie przesyłaj haseł ani danych wrażliwych.',
      privacyChoiceTitle:'Twój wybór',privacyChoice:'Adres e-mail i zrzut ekranu są opcjonalne. Przed publikacją należy dodać kontakt do spraw prywatności.',privacyBack:'Powrót do formularza',
    }
  };

  let lang = 'en';
  const available = Object.keys(languages);
  const urlLang = new URLSearchParams(location.search).get('lang');
  try {
    const stored = localStorage.getItem('postbird-language');
    lang = available.includes(urlLang) ? urlLang : available.includes(stored) ? stored : 'en';
  } catch (_) { lang = available.includes(urlLang) ? urlLang : 'en'; }
  const $ = id => document.getElementById(id);
  const text = key => languages[lang][key] || languages.en[key] || key;
  const wrap = $('langWrap'), trigger = $('langTrigger'), list = $('languageList');
  const closeList = () => { if (list) list.hidden = true; if (trigger) trigger.setAttribute('aria-expanded','false'); };

  const translate = (newLang) => {
    if (!available.includes(newLang)) return;
    lang = newLang;
    document.documentElement.lang = lang;
    document.title = `POST BIRD · ${document.body.dataset.page === 'form' ? text('title') : document.body.dataset.page === 'thanks' ? text('thankTitle') : text('privacyTitle')}`;
    document.querySelectorAll('[data-i18n]').forEach(node=>{node.textContent = text(node.dataset.i18n);});
    document.querySelectorAll('[data-placeholder]').forEach(node=>{node.placeholder = text(node.dataset.placeholder);});
    if ($('currentLanguage')) $('currentLanguage').textContent = languages[lang].name;
    if ($('reportLanguage')) $('reportLanguage').value = languages[lang].name;
    document.querySelectorAll('[data-lang]').forEach(node=>node.setAttribute('aria-checked',String(node.dataset.lang===lang)));
    const file = $('attachment')?.files?.[0];
    if (file && $('attachmentText')) $('attachmentText').textContent = file.name;
    const privacy = $('privacyLink'); if (privacy) privacy.href = "privacy.html";
    const back = $('returnLink'); if (back) back.href = "index.html";
    if ($('nextUrl')) $('nextUrl').value = new URL("thanks.html", location.href).href;
    closeList();
    try { localStorage.setItem('postbird-language',lang); } catch (_) {}
  };
  if (trigger && list) {
    trigger.addEventListener('click',()=>{const opening = list.hidden;list.hidden = !opening;trigger.setAttribute('aria-expanded',String(opening));});
    list.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>translate(button.dataset.lang)));
    document.addEventListener('click',(ev)=>{if(wrap && !wrap.contains(ev.target)) closeList();});
    document.addEventListener('keydown',(ev)=>{if(ev.key==='Escape'){closeList();trigger.focus();}});
  }
  translate(lang);

  // GitHub Pages is static: the receiver address is never embedded in this site.
  // FormSubmit supplies a public opaque routing token in the activation email.
  const rawToken = typeof window.POST_BIRD_FORM_TOKEN === 'string'
    ? window.POST_BIRD_FORM_TOKEN.trim() : '';
  const tokenValid = /^[a-zA-Z0-9_-]{12,128}$/.test(rawToken)
    && !rawToken.includes('PASTE_');
  const formEndpoint = tokenValid ? `https://formsubmit.co/${rawToken}` : '';
  const notConfigured = {
    en: 'This form is not connected yet. Please try again later.',
    ru: 'Форма пока не подключена. Пожалуйста, попробуйте позже.',
    'zh-CN': '表单尚未连接，请稍后再试。',
    es: 'Este formulario aún no está conectado. Inténtalo más tarde.',
    'pt-BR': 'Este formulário ainda não está conectado. Tente novamente mais tarde.',
    de: 'Dieses Formular ist noch nicht verbunden. Bitte versuche es später erneut.',
    fr: 'Ce formulaire n’est pas encore connecté. Réessayez plus tard.',
    pl: 'Ten formularz nie jest jeszcze połączony. Spróbuj ponownie później.'
  };
  const form = $('feedbackForm'), photo = $('attachment'), drop = $('dropZone'), remove = $('removeAttachment');
  const showStatus = (msg)=> {const node=$('statusNote');if(node){node.textContent=msg;node.hidden=false;}};
  if (form && photo && drop) {
    if (formEndpoint) form.action = formEndpoint;
    const validTypes = ['image/png','image/jpeg','image/webp'];
    const maxBytes = 9*1024*1024;
    const updateImage = () => {const f=photo.files?.[0];$('attachmentText').textContent=f?f.name:text('screenshotChoose');remove.hidden=!f;if(f){if(!validTypes.includes(f.type)){showStatus(text('fileType'));return false;}if(f.size>maxBytes){showStatus(text('fileTooBig'));return false;}}$('statusNote').hidden=true;return true;};
    photo.addEventListener('change',updateImage);
    remove.addEventListener('click',()=>{photo.value='';updateImage();});
    for(const eventName of ['dragenter','dragover']) drop.addEventListener(eventName,e=>{e.preventDefault();drop.classList.add('dragging');});
    for(const eventName of ['dragleave','drop']) drop.addEventListener(eventName,e=>{e.preventDefault();drop.classList.remove('dragging');});
    drop.addEventListener('drop',e=>{if(e.dataTransfer?.files?.length){photo.files=e.dataTransfer.files;updateImage();}});
    form.addEventListener('submit',e=>{
      if (!formEndpoint) {
        e.preventDefault();
        showStatus(notConfigured[lang] || notConfigured.en);
        return;
      }
      if (!updateImage()){e.preventDefault();return;}
      if (location.protocol==='file:'){e.preventDefault();showStatus(text('localNotice'));return;}
      $('formSubject').value = `POST BIRD • ${form.querySelector('input[name="Issue type"]:checked').value}`;
      $('formWebsite').value = location.href.split('#')[0];
      $('nextUrl').value = new URL("thanks.html", location.href).href;
      // The browser performs the real multipart POST, so screenshots reach FormSubmit intact.
    });
  }
})();
