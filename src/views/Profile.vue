<template>
  <div class="protected">
    <h1>This is the profile page for {{ $protect.user.name }}</h1>
    <h2>Only {{ $protect.user.name }} can access it</h2>
  </div>
</template>
