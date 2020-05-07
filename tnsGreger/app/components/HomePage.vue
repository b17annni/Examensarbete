<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <label class="myTitle" text="Gregers-FaraHärIfrån"></label>
            <label class="middle">NativeScript-Vue</label>
            <label class="mySubtitle" text="Search for locations"></label>
            <TextField 
                class="inputkoord" 
                v-model="latVal" 
                hint="Latitude" 
                keyboardType="number" 
                returnKeyType="next" />
            <TextField class="inputkoord" v-model="longVal" hint="Longitude" keyboardType="number" returnKeyType="next" />
            <TextField class="inputkoord" v-model="numVal" hint="Amount of locations" keyboardType="number" returnKeyType="next" />
            <button text="Search" @tap="ShowLocationsTap" />
        </StackLayout>
    </Page>
</template>

<script>
import showlocations from './showlocations';
export default {
    components: {
        showlocations
    },
    methods: {
        ShowLocationsTap(args) {
            global.lati = this.latVal;
            global.longi = this.longVal;
            global.numbi = this.numVal;
            this.$navigateTo(showlocations);
        },
    },
    data() {
        return {
            latVal: '',
            longVal: '',
            numVal: '',
        }
    }
};
</script>

<style scoped>
    .myTitle {
        vertical-align: center;
        text-align: center;
        font-size: 40;
        color: aliceblue;
        margin-top: 10;
        
    }
    .mySubtitle{
        color: aliceblue;
           text-align: center;
           font-size: 30;
    }
    Page {
        background-color: #1F1B24;
        color: #f0f8ff;
    }
    button {
       background-color: aliceblue;
       color: #1F1B24;
       width: 150;
        
    }
    .middle{
        font-size: 15;
        text-align: center;
    }
    .inputkoord {
    height: 40;
    width: 300;
    justify-content: center;
    color: #1F1B24;
    background-color: aliceblue;
    padding: 10;
    margin-bottom: 5;
    }
</style>
