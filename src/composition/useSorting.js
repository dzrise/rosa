const useSorting = () => {
    const sort = (obj, column, type) => {
        let Direction = type.toUpperCase()
        if (['ASC','DESC'].indexOf(Direction) == -1) {
            console.error($type, 'Not valid, please use ASC or DESC')
            return
        }

        if(Direction === 'ASC') {
            obj.sort((a,b) => {return (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0)})
        } else if(Direction === 'DESC' ) {
            obj.sort((a,b) => {return (a[column] > b[column]) ? -1 : ((b[column] > a[column]) ? 1 : 0)})
        }

    }

    return {sort}
}
export default useSorting
