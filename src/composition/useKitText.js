const useKitText = () => {
    const trimText = (text, limit) => {
        if( typeof text === 'string' ) {
            text = text.trim();
            if (text.length <= limit) {
                return text;
            } else {
                text = text.slice(0, limit);

                let res = text.trim() + "...";
                return res
            }
        } else {
            return text
        }
    }

    const convertDate = (inputFormat) => {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        let d = new Date(inputFormat)
        return [d.getFullYear(),  pad(d.getMonth()+1), pad(d.getDate())].join('-')
    }

    return { trimText, convertDate }
}

export default useKitText()
