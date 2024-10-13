import { useEffect } from "react";
import { Link, Stack, Text, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";

export const Copyright = () => {
  const { i18n, t } = useTranslation();
 
  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={3}
      justify="space-between"
      align={{ base: "center", md: "center" }}
      pb="24px"
    >
      <Text>© {new Date().getFullYear()} Fitness Center</Text>
      <Stack spacing={7} direction={{ base: "column", md: "row" }} align={'center'}>
        <Link href="#">{t("footer.termOfUse")}</Link>
        <Link href="#">{t('footer.privacyPolicy')}</Link>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Language Options'
            icon={<FaGlobeAmericas />}
            variant='outline'
          />
          <MenuList>
            <MenuItem onClick={() => changeLanguage("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("br")}>
              Português
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Stack>
  );
};
