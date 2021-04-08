export default {
	getLanguages: state => state.languages,
	getLanguage: state => id => state.languages.find(language => language.id === id)
};
