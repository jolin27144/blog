<template>
  <h3>{{ repository.issues }}</h3>
</template>

<script>
import { Sample } from "../graphql/sample";
export default {
  apollo: {
    repository: Sample
  },
  data() {
    return {
      repository: { issues: "" }
    };
  }
};
</script>

<style></style>
