<script>
  import Footer from '$lib/components/Footer.svelte';
  import Nav from '$lib/components/navigations/Nav.svelte';
</script>

<div class="container">
  <section>
    <Nav
      links={[
        { href: '/', title: 'Home' },
        { href: '/sandbox', title: 'Sandbox' },
      ]}
    />
    <main>
      <slot />
    </main>
    <Footer />
  </section>
</div>

<!-- https://kiranworkspace.com/how-to-stick-footer-to-bottom-of-page/ -->
<style>
  /* with display: flex */
  /* section {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  } */

  /* with display: grid */
  section {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>
