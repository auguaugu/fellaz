<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { WEB_URL } from '@/configs/constants';

  export let title1: string = '';
  export let title2: string = '';
  export let desc: string;

  const isValidEmail = (value: string) => {
    if (!value) return false;

    const regex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i;
    return regex.test(value);
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const email = event.target[0].value;
    if (!isValidEmail(email)) {
      alert($_('about_email_invalid'));
      return;
    }

    const res = await fetch(
      'https://561kd5e3ze.execute-api.ap-northeast-2.amazonaws.com/prod/registration',
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }
    ).then((res) => res.json());

    if (!res || !res.ok) {
      alert($_('about_email_alert_fail'));
      return;
    }
    alert($_('about_email_alert_submit'));
    event.target[0].value = '';
  };
</script>

<div class="email">
  <div>
    <div class="email_title">{$_(title1)}</div>
    <div class="email_title purple">{$_(title2)}</div>
  </div>

  <div class="email_desc">{$_(desc)}</div>

  <form class="email_form" on:submit={handleSubmit}>
    <input class="email_input" placeholder={$_('about_email_input')} />
    <button class="email_submit" type="submit"
      >{$_('about_email_submit')}</button
    >
  </form>

  <div class="email_info">
    {$_('about_email_info')}
    <span>
      <a
        href={WEB_URL.termsOfUse}
        target="_blank"
        rel="noreferrer"
        class="underline"
      >
        Terms of Use
      </a>
      and
      <a
        href={WEB_URL.privacyPolicy}
        target="_blank"
        rel="noreferrer"
        class="underline"
      >
        Privacy Policy
      </a>
    </span>
  </div>
</div>

<style lang="scss">
  .email {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 160px 60px;
    background: linear-gradient(180deg, #0f0f0f 0%, rgba(15, 15, 15, 0) 100%)
      black;

    @include media(mobile) {
      gap: 16px;
      padding: 80px 24px;
    }
  }
  .email_title {
    @include hellix(64, 700);
    background: none;
    -webkit-text-fill-color: color(white);
    color: color(white);
    text-align: center;

    &.purple {
      background: linear-gradient(105.88deg, #e066ff 0%, #4844ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @include media(mobile) {
      @include hellix(26, 700);
    }
  }
  .email_desc {
    @include hellix(24, 600);
    color: color(white);
    text-align: center;

    @include media(mobile) {
      @include hellix(16, 400);
    }
  }
  .email_form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 44px;

    @include media(mobile) {
      gap: 12px;
      margin-top: 40px;
    }
  }
  .email_input {
    width: 100%;
    max-width: 340px;
    height: 48px;
    background-color: color(grey4);
    border: 1px solid color(grey3);
    border-radius: 12px;
    @include hellix(16, 400);
    color: color(grey1);
    padding: 0 20px;
    outline: none;
  }
  .email_submit {
    width: 100%;
    max-width: 340px;
    height: 48px;
    background: linear-gradient(105.88deg, #e066ff 0%, #4844ff 100%);
    border-radius: 12px;
    @include hellix(16, 600);
    color: color(white);
    text-align: center;
    cursor: pointer;
  }
  .email_info {
    @include hellix(14, 400);
    color: color(grey2);
  }
</style>
