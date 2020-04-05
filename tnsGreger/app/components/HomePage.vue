<template>
    <Page actionBarHidden="true">
        <StackLayout>
            <label text="Gregers-FaraHärIfrån..  Bby"></label>
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
            global.lati = this.latVal;
            global.longi = this.longVal;
            this.$navigateTo(showlocations);
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