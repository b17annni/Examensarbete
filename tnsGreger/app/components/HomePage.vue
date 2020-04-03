<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <label text="Gregers-FaraHärIfrån..  baccysssddydy"></label>
            <TextField v-model="latVal" hint="Latitude" keyboardType="number" returnKeyType="next" />
            <TextField v-model="longVal" hint="Longitude" keyboardType="number" returnKeyType="next" />
            <label :text=" this.longVal + this.latVal "  />
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
            this.$navigateTo(showlocations);
            global.lati = this.latVal;
            global.longi = this.longVal;
        },
    },
    data() {
        return {
            latVal: '',
            longVal: '',
        }
    }
};
</script>