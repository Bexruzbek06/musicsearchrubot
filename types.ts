export enum Language {
  RU = 'RU',
  EN = 'EN',
  UZ_LAT = 'UZ_LAT',
  UZ_CYR = 'UZ_CYR',
}

export interface ContentText {
  nav_home: string;
  nav_about: string;
  nav_features: string;
  nav_charts: string;
  nav_contact: string;
  
  hero_title: string;
  hero_subtitle: string;
  hero_btn_bot: string;
  hero_btn_charts: string;

  about_title: string;
  about_desc: string;
  step_1_title: string;
  step_1_desc: string;
  step_2_title: string;
  step_2_desc: string;
  step_3_title: string;
  step_3_desc: string;

  features_title: string;
  feat_instant_title: string;
  feat_instant_desc: string;
  feat_sources_title: string;
  feat_sources_desc: string;
  feat_charts_title: string;
  feat_charts_desc: string;
  feat_support_title: string;
  feat_support_desc: string;

  charts_title: string;
  charts_tab_yandex: string;
  charts_tab_vk: string;

  contact_title: string;
  contact_company: string;
  contact_phone: string;
  contact_email: string;
  contact_tg_support: string;
  contact_tt_support: string;

  footer_rights: string;
  footer_policy: string;
  footer_terms: string;
}

export interface Song {
  rank: number;
  title: string;
  artist: string;
  cover: string;
}
