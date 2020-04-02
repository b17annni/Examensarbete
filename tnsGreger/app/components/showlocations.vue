<template>
    <Page actionBarHidden="true">
           <StackLayout>
            <label text="Gregers-FaraHärIfrån"></label>
            <button text="Back" @tap="GetHome" />
        </StackLayout>
    </Page>
</template>

<script>
import HomePage from './HomePage';
export default {
    components: {
        HomePage
    },
    methods: {
        GetHome(args) {
            this.$navigateTo(HomePage);
        }
    }
};
</script>