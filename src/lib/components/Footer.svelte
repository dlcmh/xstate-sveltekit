<script>
  import { appService } from '$lib/xstate/services/appService';

  const { state } = appService;

  // reactive variables
  $: context = $state.context;
</script>

<footer>{context.copyrightText}</footer>
