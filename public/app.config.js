(function() {
    'use strict';
    angular.module('hibiskiss').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
        $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application
            .state({ // 1st STATE (on click in this case)
                name: 'splash',
                url: '/',
                component: 'splash'
            })
            .state({ // main state/component on every page
                name: 'love',
                url: '/love',
                component: 'love'
            })
            .state({ // 1st STATE (on click in this case)
                name: 'about',
                url: '/about',
                component: 'about'
            })
            .state({ // 1st STATE (on click in this case)
                name: 'academy',
                url: '/academy',
                component: 'academy'
            })
            .state({ // 2nd STATE (on click in this case)
                name: 'ayurveda',
                url: '/ayurveda',
                component: 'ayurveda'
            })
            .state({ // 3rd STATE (on click in this case)
                name: 'newsletter',
                url: '/newsletter',
                component: 'newsletter'
            })
            .state({ // 3rd STATE (on click in this case)
                name: 'quiz',
                url: '/quiz',
                component: 'quiz'
            })
            .state({ // 1st STATE (on click in this case)
                name: 'poses',
                url: '/poses',
                component: 'poses'
            })
            .state({ // 5th STATE (on click in this case)
                name: 'schedule',
                url: '/schedule',
                component: 'schedule'
            })
            .state({ // 5th STATE (on click in this case)
                name: 'calendar',
                url: '/calendar',
                component: 'calendar'
            })
            .state({ // 5th STATE (on click in this case)
                name: 'login',
                url: '/login',
                component: 'login'
            })
            .state({ // 5th STATE (on click in this case)
                name: 'store',
                url: '/store',
                component: 'store'
            })
            // .state({ // 4th STATE (on click in this case)
            //     name: 'users',
            //     url: '/users/:id',
            //     component: 'users'
            // })
            .state({ // 5th STATE (on click in this case)
                name: 'yoga',
                url: '/yoga',
                component: 'yoga'
            })
            .state({ // 5th STATE (on click in this case)
                name: 'members',
                url: '/members',
                component: 'members'
            })
            .state({ // 5th STATE (on click in this case)
                name: 'student',
                url: '/student',
                component: 'student'
            })

            $urlRouterProvider.otherwise('/')
    } // END CONFIG FUNCTION
})()
