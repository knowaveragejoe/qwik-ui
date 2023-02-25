import { component$, QwikIntrinsicElements, Slot } from '@builder.io/qwik';

export type FooterProps = QwikIntrinsicElements['footer'];

export const Footer = component$((props: FooterProps) => {
  return (
    <footer {...props}>
      <Slot />
    </footer>
  );
});
