<template>
  <div class="home">
    <ui-notif v-if="false"></ui-notif>
    <h1 class="text-white text-4xl md:text-6xl text-center mt-6">arcade games</h1>
    <ag-welcome></ag-welcome>
  </div>
</template>

<script>
import WelcomeVue from '../components/Welcome.vue'
import NotificationVue from '@/components/Notification.vue'

export default {
  name: 'home',
  components: {
    agWelcome: WelcomeVue,
    uiNotif: NotificationVue
  }
}
</script>
