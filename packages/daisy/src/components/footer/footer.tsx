import { component$, HTMLAttributes, Slot } from '@builder.io/qwik';
import { Footer as HeadlessFooter } from '@qwik-ui/headless';
import { clsq } from '@qwik-ui/shared';
import { daisyConfig } from './daisy.config';

export type HTMLFooterProps = HTMLAttributes<HTMLElement>;

export type DaisyFooterProps = {
  center?: boolean;
};

export type FooterProps = HTMLFooterProps & DaisyFooterProps;

export const Footer = component$((props: FooterProps) => {
  const { class: classNames, center: center, ...rest } = props;
  const { options } = daisyConfig;
  return (
    <HeadlessFooter
      class={clsq('footer', { [options.center]: center }, classNames)}
      {...rest}
    >
      <Slot />
    </HeadlessFooter>
  );
});
