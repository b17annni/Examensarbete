<template>
    <Page actionBarHidden="true">
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
