import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "_vendor-*/**",
      "src/components/www-xhulia-com-optimized/**",
      "src/components/enchanted-times-539888-framer-app-optimized/**",
      "src/components/precious-channel-784858-framer-app-optimized/**",
      "src/components/displacementgrid-framer-website-optimized/**",
      "src/components/welcomed-experience-850387-framer-app-optimized/**",
      "src/components/nudge-folio-framer-website-optimized/**",
      "src/components/3d-business-card-framer-website-optimized/**",
      "src/components/kenney_toy-car-kit/**",
      "src/components/vinyl-player/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
export default eslintConfig;
