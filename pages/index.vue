<template>
  <div class="w-full h-full">
    <Navbar />
    <div class="flex flex-col items-center gap-4">
      <Card title="Lorem Ipsum" description="Dolor Sit amet" />
      <Card title="Lorem Ipsum" description="Dolor Sit amet" />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Card from "~/components/Card";

export default {
  components: {
    Navbar,
    Card,
  }
};
</script>
