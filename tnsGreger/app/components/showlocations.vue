<template>
    <Page actionBarHidden="true">
           <StackLayout>
            <label class="mySubtitle" text="Your Locations"></label>
             <ListView for="p in location" class="list-group">
                <v-template>
                    <StackLayout class="list-group-item">
                        <Label class="listPlaces" :text="p.name" />
                    </StackLayout>
                </v-template>
            </ListView>
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
            http.getJSON("https://api.resrobot.se/v2/location.nearbystops?key=<KEY></KEY>&originCoordLat="+lat+"&originCoordLong="+long+"&maxNo=5&format=json").then(result => {
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