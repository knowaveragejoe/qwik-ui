import { $, component$, useStyles$ } from '@builder.io/qwik';
import { Footer } from '@qwik-ui/headless';
import styles from './index.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="flex flex-col gap-8 mt-4">
      <h2>Footer</h2>
      <div class="flex flex-col gap-8 mt-4">
        Footer can contain logos, copyright notices, and links to other pages.
        <div class="pb-2 text-sm font-bold">
          <span class="component-preview-title">Footer</span>
        </div>
        <div className="panel">
          <Footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
              <span className="footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">Legal</span>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </Footer>
        </div>
      </div>
    </div>
  );
});
