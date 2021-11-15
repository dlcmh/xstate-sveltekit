<!-- https://dev.to/evanwinter/active-links-in-sveltekit-4ihf -->
<script lang="ts">
  import { page } from '$app/stores';
  import type { Link } from './types';

  export let link: Link;

  // reactive variables
  $: isActive = $page.path === link.href;
</script>

{#if isActive}
  <span class="d-inline-block px-1">{link.title}</span>
{:else}
  <a class="d-inline-block px-1" href={link.href}>{link.title}</a>
{/if}
