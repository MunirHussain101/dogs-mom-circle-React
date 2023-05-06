import {
  j as s,
  F as d,
  R as n,
  a as e,
  C as a,
  b as g,
  r as h,
  m as u,
  I as p,
  M as y,
  B as f,
  u as _,
  L as m,
} from "./index-b6cfc18d.js";
const x = () =>
  s(d, {
    children: [
      s(n, {
        style: {background: "linear-gradient(180.51deg, #ffe5ea, #fff)"},
        children: [
          e(a, {lg: 6, xs: 0}),
          e(a, {
            style: {display: "flex", justifyContent: "center"},
            lg: 12,
            xs: 24,
            children: e(g.LazyLoadImage, {
              src: "assets/banner/Dogbannerimg.png",
              alt: "dog mom banner",
              effect: "opacity",
              className: "img_banner",
            }),
          }),
          e(a, {lg: 6, xs: 0}),
        ],
      }),
      s(n, {
        children: [
          e(a, {lg: 2, xs: 0}),
          e(a, {
            lg: 20,
            xs: 24,
            style: {display: "flex", justifyContent: "center"},
            children: s("h1", {
              className: "head_banner",
              children: [
                "Find a neighbour to look after your dog, return ",
                e("br", {}),
                " the favour and build a community, ",
                e("span", {
                  className: "head_banner_inner",
                  children: "all for free.",
                }),
                " ",
              ],
            }),
          }),
          e(a, {lg: 2, xs: 0}),
        ],
      }),
    ],
  });
const b = () => {
  const [i, r] = h.useState("");
  h.useState(!1);
  const [t, l] = u.useMessage();
  return s(d, {
    children: [
      l,
      s(n, {
        style: {marginTop: 50},
        children: [
          e(a, {lg: 8}),
          e(a, {
            lg: 8,
            xs: 24,
            style: {display: "flex", justifyContent: "center"},
            children: e("h1", {
              className: "main_head_email",
              children: "Join our waitlist",
            }),
          }),
          e(a, {lg: 8}),
          e(a, {lg: 4}),
        ],
      }),
      s(n, {
        style: {marginTop: 40},
        children: [
          e(a, {lg: 8, xs: 2}),
          e(a, {
            lg: 8,
            xs: 20,
            children: e(p, {
              value: i,
              type: "email",
              onChange: (c) => {
                r(c.target.value);
              },
              className: "main_emailFiedl",
              size: "large",
              placeholder: "Type your email address here",
              prefix: e(y, {className: "mail_icon"}),
              suffix: e(f, {
                onClick: () => {
                  i
                    ? (t.open({
                        type: "success",
                        content:
                          "Thank you for joining our waiting list! We'll notify you when a spot becomes available.",
                      }),
                      r(""))
                    : t.open({
                        type: "error",
                        content: "Please Fill This Field",
                      });
                },
                className: "submit_icon",
                children: " Submit now",
              }),
            }),
          }),
          e(a, {lg: 8, xs: 2}),
        ],
      }),
    ],
  });
};
const N = () => {
    const i = "assets/home-cards/new9.svg",
      r = "assets/home-cards/new10.svg",
      t = "assets/home-cards/new11.svg",
      l = _((o) => {
        var c;
        return (c = o == null ? void 0 : o.auth) == null
          ? void 0
          : c.userDetails;
      });
    return e(d, {
      children: s("div", {
        className: "main_card_antdBox",
        children: [
          s(n, {
            style: {marginTop: 40},
            children: [
              e(a, {lg: 6}),
              e(a, {
                lg: 12,
                style: {display: "flex", justifyContent: "center"},
                children: s("h1", {
                  className: "card_head_first",
                  children: [
                    "How does ",
                    e("span", {
                      style: {color: "#EAB2BB"},
                      children: "Dog Mom Circle",
                    }),
                    "  Works?",
                  ],
                }),
              }),
              e(a, {lg: 6}),
            ],
          }),
          s(n, {
            justify: "space-around",
            style: {
              marginTop: 60,
              marginBottom: 100,
              display: "flex",
              flexWrap: "wrap",
            },
            children: [
              s(a, {
                className: "card_box",
                lg: 7,
                md: 24,
                xs: 24,
                style: {width: "100%", paddingBottom: 70},
                children: [
                  e(m, {
                    to: l ? "/search" : "",
                    children: e("img", {src: i, className: "card_img"}),
                  }),
                  e("h1", {
                    className: "card_head_first_sign",
                    children: "Signup",
                  }),
                  e("p", {
                    className: "card_head_first_para",
                    children:
                      "Sign up, tell us a little about you and your dog. Fill out your hosting preferences.",
                  }),
                ],
              }),
              s(a, {
                className: "card_box",
                lg: 7,
                md: 24,
                xs: 24,
                style: {width: "100%", paddingBottom: 70},
                children: [
                  e(m, {
                    to: l ? "/search" : "",
                    children: e("img", {src: r, className: "card_img"}),
                  }),
                  e("h1", {
                    className: "card_head_first_sign",
                    children: "Post",
                  }),
                  e("p", {
                    className: "card_head_first_para",
                    children:
                      "Post about your upcoming boarding and daycare needs in the group. We will help you find the best match. Everyday of boarding costs 10 points. New members are allowed to go negative 100 points.",
                  }),
                ],
              }),
              s(a, {
                className: "card_box",
                lg: 7,
                md: 24,
                xs: 24,
                style: {width: "100%", paddingBottom: 70},
                children: [
                  e(m, {
                    to: l ? "/search" : "",
                    children: e("img", {src: t, className: "card_img"}),
                  }),
                  e("h1", {
                    className: "card_head_first_sign",
                    children: "Help",
                  }),
                  e("p", {
                    className: "card_head_first_para",
                    children:
                      "Give back to the community by hosting another dog. Everyday of hosting earns 10 points.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  v = () =>
    e(d, {
      children: s("div", {
        className: "main_row_home",
        children: [e(x, {}), e(b, {}), e(N, {})],
      }),
    });
export {v as default};
