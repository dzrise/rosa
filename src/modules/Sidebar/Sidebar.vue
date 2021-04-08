<template>
  <ul class="navigation nav flex-column">
    <li
        class="navigation__item nav-item"
        v-for="rout in navigation"
        :key="rout.name"
    >

      <router-link
          class="navigation__link text-secondary p-2"
          expand exact-active-class="active"
          :to="rout.path">
        {{ rout.name }}
      </router-link>

      <div class="sub-menu"
           v-if="rout?.children?.length && currentPath.includes(rout.path)">

        <ul class="sub-menu__list nav flex-column pl-3">
          <li class="nav-item" v-for="(childRout, index) in rout.children" :key="`${childRout}-${index}`">
            <router-link class="text-secondary p-2" expand exact-active-class="active" :to="childRout.path">
              {{ childRout.name }}
            </router-link>
          </li>
        </ul>
      </div>

    </li>
  </ul>
</template>

<script>
import {computed} from 'vue';
import {useRouter} from 'vue-router';
import routes from '@/router/routes';

export default {
  name: 'side-bar',
  setup() {
    const route = useRouter();
    const currentPath = computed(() => route.currentRoute.value.path);

    const navigation = computed(() => {
      return routes.reduce((acc, item) => {

        const navItem = {name: item.name, path: `${item.path}`, children: item.children || []};

        if (navItem.name && navItem.name !== '404') {
          if (navItem.children.length) {
            navItem.children = navItem.children
                .filter(el => el.path && !(el.path.includes(':id')))
                .map(el => ({
                  path: `${item.path}/${el.path}`,
                  name: el.name
                }));
          }
          !navItem.children.length && delete navItem.children;
          acc.push(navItem);
        }
        return acc;
      }, []);
    });
    return {navigation, currentPath}
  },
}
</script>

<style scoped lang="scss">
.sub-menu {
  &__list {
    margin: 8px 0;
  }
}

li:hover a:hover {
  background: #e8e8e8;
  color: #28a745 !important;
  text-decoration: none;
  cursor: pointer;
}

a {
  display: block;
  width: 100%;
}

a.active {
  background: #e8e8e8;
  color: #28a745 !important;
  text-decoration: none;
}

.oi {
  margin-right: 1rem;
}
</style>
