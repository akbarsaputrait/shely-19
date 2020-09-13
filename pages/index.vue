<template>
  <div class="w-full h-full">
    <Navbar />
    <div class="flex flex-col items-center">
      <Card title="Lorem Ipsum" description="Dolor Sit amet" />
      <Card title="Lorem Ipsum" description="Dolor Sit amet" class="mt-6" />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Card from "~/components/Card";
export default {
  components: {
    Navbar,
    Card
  }
};
</script>
