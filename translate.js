var script = document.createElement("script");
script.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.createElement(script);
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
var translate = document.createElement("div");
translate.id = "google_translate_element";
document.body.appendChild(translate);
