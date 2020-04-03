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
            http.getJSON("https://api.resrobot.se/v2/location.nearbystops?key=<KEY>&originCoordLat=57.711111&originCoordLong=11.964167&maxNo=5&format=json").then(result => {
    this.location = result.StopLocations;
}, error => {
    console.log(error);
});
        }
    
};
</script>