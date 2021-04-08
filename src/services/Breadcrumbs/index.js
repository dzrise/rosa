import store from '../../store/store';

export function createBreadcrumbs(router = {}) {
    router.beforeEach((to) => {
        const basePath = {name: 'Дашборт', path: '/'};
        const breadcrumbs = to.matched.reduce((acc, item) => {
            let path = item.path;
            if (acc.some(el => el.path === path) || item.path === '/') {
                return acc;
            }
            if (path.includes(':')) {
                let param = path.split(':').pop();
                path = path.replace(`:${param}`, to.params[param]);
            }
            acc.push({name: item.name, path: path});
            return acc;
        }, [basePath]);
        store.dispatch('settings/setBreadcrumbs', breadcrumbs.length > 1 ? breadcrumbs : [basePath]);
        // router.breadcrumbs = breadcrumbs.length > 1 ? breadcrumbs : [basePath];
    })
}
