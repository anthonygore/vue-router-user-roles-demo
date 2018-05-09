<template>
  <div class="protected">
    <h1>This is the profile page for {{ $user.get().name }}</h1>
    <h2>Only {{ $user.get().name }} can access it</h2>
  </div>
</template>
