<template>
    <Page actionBarHidden="true">
           <StackLayout>
            <label text="Gregers-FaraHärIfrån"></label>
             <ListView for="p in location" class="list-group">
                <v-template>
                    <StackLayout class="list-group-item">
                        <Label :text="p.name" />
                    </StackLayout>
                </v-template>
            </ListView>
              <button text="lert" @tap="lerler" />
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
        },
           lerler(args) {
            alert(global.longi);
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