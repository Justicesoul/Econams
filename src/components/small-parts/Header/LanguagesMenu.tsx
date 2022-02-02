import { FC } from 'react';

type LanguagesMenuType = {
  onClick: (arr: string) => void;
  activeLanguage: string;
};

const languages = ['en', 'no', 'se', 'ru', 'lv'];

const LanguagesMenu: FC<LanguagesMenuType> = ({ onClick, activeLanguage }) => {
  return (
    <div className="mobile__languages">
      {languages.map((item) => {
        return (
          <div key={item}
            className={`mobile__language-item ${
              item === activeLanguage && 'active-language'
            }`}
            onClick={() => onClick(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default LanguagesMenu;
