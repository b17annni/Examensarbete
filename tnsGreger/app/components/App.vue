<template>
    <Page>
        <ActionBar title="TNS-vue Gregers - FaraHärIfrån"/>
        <GridLayout>
           <frame id="home-page">
             <HomePage />
           </frame>
        </GridLayout>
    </Page>
</template>

<script >
import HomePage from './HomePage';
import { screen } from 'tns-core-modules/platform';

  export default {
   components: {
     HomePage
   },
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
