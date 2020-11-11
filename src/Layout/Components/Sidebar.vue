<template>
    <div :class="sidebarbg" class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        title: '首页',
                        icon: 'pe-7s-rocket',
                        href: '/',
                    },
                    {
                        title: '任务',
                        icon: 'pe-7s-rocket',
                        href: '/project/home',
                    },
                    {
                        title: '定时任务',
                        icon: 'pe-7s-rocket',
                        href: '/project/timeTask',
                    },
                    // {
                    //     title: '添加任务',
                    //     icon: 'pe-7s-rocket',
                    //     href: '/project/addTask',
                    // },
                    {
                        title: '项目',
                        icon: 'pe-7s-display2',
                        href: '/project/projects',
                        // child: [
                        //     {
                        //         href: '/apps/home',
                        //         title: 'OSS',
                        //     },
                        //     {
                        //         href: '/apps/home',
                        //         title: 'OBS',
                        //     },
                        //     {
                        //         href: '/apps/home',
                        //         title: 'COS',
                        //     },
                        //     {
                        //         href: '/apps/home',
                        //         title: 'Kodo',
                        //     },
                        // ]
                    },

                ],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,

        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
