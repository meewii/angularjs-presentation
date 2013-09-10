// services
angular.module("App.Services", [])
  .factory("Session", ["$rootScope", "$cookies", "$cookieStore",
    function($rootScope, $cookies, $cookieStore) {
      var auth_token = null;
      var offer_obj = {
        /*category: {},
        prices: {},
        location: {},
        company: {},
        date: {},
        service: {}*/
      };

      return {
        
        setToken: function(token) {
          auth_token = token;
          $cookies.auth_token = auth_token;
        },

        getToken: function() {
          if (!auth_token) auth_token = $cookies.auth_token;
          return auth_token;
        },

        setOffer: function(param, offer) {
          offer_obj[param] = offer;
          $cookieStore.put('offer', offer_obj);
        },
        getOffer: function() {
          //if (!offer_obj) offer_obj = $cookieStore.offer_obj;
          console.log($cookieStore.get('offer'));
          return $cookieStore.get('offer');
        }

      }

    }
  ])


  .service("SeeDetails", ["$rootScope",  
    function($rootScope) {
      
      var selected_item = null;

      return {
        getItem: function() {
          return selected_item;
        },
        setItem: function(item) {
          selected_item = item;
        }
      }
  }])
;