<template>
    <Page actionBarHidden="true">
           <StackLayout>
            <label class="mySubtitle" text="Your Locations"></label>
              
            <button text="Back" @tap="GetHome" />
        </StackLayout>
    </Page>
</template>

<script>
  import HomePage from './HomePage';
  import * as http from "http";
export default {
    components: {
        HomePage
    },
    methods: {
        GetHome(args) {
            this.$navigateTo(HomePage);
        } 
    },
     data() {
            return {
                location: []
            };
        },
        mounted() { 
            var lat = global.lati;
            var long = global.longi;
            var num = global.numbi;
            http.getJSON("https://api.resrobot.se/v2/location.nearbystops?key=<KEY>&originCoordLat="+lat+"&originCoordLong="+long+"&maxNo="+num+"&r=5000&format=json").then(result => {
    this.location = result.StopLocation;
}, error => {
    console.log(error);
});
        }
    
};
</script>

<style scoped>
     Page {
        background-color: #1F1B24;
        color: aliceblue;
    }

     .mySubtitle{
         vertical-align: center;
         color: aliceblue;
         text-align: center;
         font-size: 30;
         margin-top: 10;
    }
    .listPlaces{
        color: aliceblue;
        font-size: 20;
        border-bottom: 2;
        border-bottom-color: aliceblue;
    }
    button{
         background-color: aliceblue;
       color: #1F1B24;
    }
</style>