const countries = [
  {
    code: 'AD',
    name: 'Andorra',
    native: 'Andorra',
    phone: '376',
    capital: 'Andorra la Vella',
    currency: 'EUR',
    languages: [
      {
        name: 'Catalan',
      },
    ],
    emoji: '🇦🇩',
    emojiU: 'U+1F1E6 U+1F1E9',
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    native: 'دولة الإمارات العربية المتحدة',
    phone: '971',
    capital: 'Abu Dhabi',
    currency: 'AED',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇦🇪',
    emojiU: 'U+1F1E6 U+1F1EA',
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    native: 'افغانستان',
    phone: '93',
    capital: 'Kabul',
    currency: 'AFN',
    languages: [
      {
        name: 'Pashto',
      },
      {
        name: 'Uzbek',
      },
      {
        name: 'Turkmen',
      },
    ],
    emoji: '🇦🇫',
    emojiU: 'U+1F1E6 U+1F1EB',
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    native: 'Antigua and Barbuda',
    phone: '1268',
    capital: "Saint John's",
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇦🇬',
    emojiU: 'U+1F1E6 U+1F1EC',
  },
  {
    code: 'AI',
    name: 'Anguilla',
    native: 'Anguilla',
    phone: '1264',
    capital: 'The Valley',
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇦🇮',
    emojiU: 'U+1F1E6 U+1F1EE',
  },
  {
    code: 'AL',
    name: 'Albania',
    native: 'Shqipëria',
    phone: '355',
    capital: 'Tirana',
    currency: 'ALL',
    languages: [
      {
        name: 'Albanian',
      },
    ],
    emoji: '🇦🇱',
    emojiU: 'U+1F1E6 U+1F1F1',
  },
  {
    code: 'AM',
    name: 'Armenia',
    native: 'Հայաստան',
    phone: '374',
    capital: 'Yerevan',
    currency: 'AMD',
    languages: [
      {
        name: 'Armenian',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇦🇲',
    emojiU: 'U+1F1E6 U+1F1F2',
  },
  {
    code: 'AO',
    name: 'Angola',
    native: 'Angola',
    phone: '244',
    capital: 'Luanda',
    currency: 'AOA',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇦🇴',
    emojiU: 'U+1F1E6 U+1F1F4',
  },
  {
    code: 'AQ',
    name: 'Antarctica',
    native: 'Antarctica',
    phone: '672',
    capital: null,
    currency: null,
    languages: [],
    emoji: '🇦🇶',
    emojiU: 'U+1F1E6 U+1F1F6',
  },
  {
    code: 'AR',
    name: 'Argentina',
    native: 'Argentina',
    phone: '54',
    capital: 'Buenos Aires',
    currency: 'ARS',
    languages: [
      {
        name: 'Spanish',
      },
      {
        name: 'Guarani',
      },
    ],
    emoji: '🇦🇷',
    emojiU: 'U+1F1E6 U+1F1F7',
  },
  {
    code: 'AS',
    name: 'American Samoa',
    native: 'American Samoa',
    phone: '1684',
    capital: 'Pago Pago',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Samoan',
      },
    ],
    emoji: '🇦🇸',
    emojiU: 'U+1F1E6 U+1F1F8',
  },
  {
    code: 'AT',
    name: 'Austria',
    native: 'Österreich',
    phone: '43',
    capital: 'Vienna',
    currency: 'EUR',
    languages: [
      {
        name: 'German',
      },
    ],
    emoji: '🇦🇹',
    emojiU: 'U+1F1E6 U+1F1F9',
  },
  {
    code: 'AU',
    name: 'Australia',
    native: 'Australia',
    phone: '61',
    capital: 'Canberra',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇦🇺',
    emojiU: 'U+1F1E6 U+1F1FA',
  },
  {
    code: 'AW',
    name: 'Aruba',
    native: 'Aruba',
    phone: '297',
    capital: 'Oranjestad',
    currency: 'AWG',
    languages: [
      {
        name: 'Dutch',
      },
      {
        name: 'Panjabi / Punjabi',
      },
    ],
    emoji: '🇦🇼',
    emojiU: 'U+1F1E6 U+1F1FC',
  },
  {
    code: 'AX',
    name: 'Åland',
    native: 'Åland',
    phone: '358',
    capital: 'Mariehamn',
    currency: 'EUR',
    languages: [
      {
        name: 'Swedish',
      },
    ],
    emoji: '🇦🇽',
    emojiU: 'U+1F1E6 U+1F1FD',
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    native: 'Azərbaycan',
    phone: '994',
    capital: 'Baku',
    currency: 'AZN',
    languages: [
      {
        name: 'Azerbaijani',
      },
    ],
    emoji: '🇦🇿',
    emojiU: 'U+1F1E6 U+1F1FF',
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    native: 'Bosna i Hercegovina',
    phone: '387',
    capital: 'Sarajevo',
    currency: 'BAM',
    languages: [
      {
        name: 'Bosnian',
      },
      {
        name: 'Croatian',
      },
      {
        name: 'Serbian',
      },
    ],
    emoji: '🇧🇦',
    emojiU: 'U+1F1E7 U+1F1E6',
  },
  {
    code: 'BB',
    name: 'Barbados',
    native: 'Barbados',
    phone: '1246',
    capital: 'Bridgetown',
    currency: 'BBD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇧🇧',
    emojiU: 'U+1F1E7 U+1F1E7',
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    native: 'Bangladesh',
    phone: '880',
    capital: 'Dhaka',
    currency: 'BDT',
    languages: [
      {
        name: 'Bengali',
      },
    ],
    emoji: '🇧🇩',
    emojiU: 'U+1F1E7 U+1F1E9',
  },
  {
    code: 'BE',
    name: 'Belgium',
    native: 'België',
    phone: '32',
    capital: 'Brussels',
    currency: 'EUR',
    languages: [
      {
        name: 'Dutch',
      },
      {
        name: 'French',
      },
      {
        name: 'German',
      },
    ],
    emoji: '🇧🇪',
    emojiU: 'U+1F1E7 U+1F1EA',
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    native: 'Burkina Faso',
    phone: '226',
    capital: 'Ouagadougou',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Peul',
      },
    ],
    emoji: '🇧🇫',
    emojiU: 'U+1F1E7 U+1F1EB',
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    native: 'България',
    phone: '359',
    capital: 'Sofia',
    currency: 'BGN',
    languages: [
      {
        name: 'Bulgarian',
      },
    ],
    emoji: '🇧🇬',
    emojiU: 'U+1F1E7 U+1F1EC',
  },
  {
    code: 'BH',
    name: 'Bahrain',
    native: '‏البحرين',
    phone: '973',
    capital: 'Manama',
    currency: 'BHD',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇧🇭',
    emojiU: 'U+1F1E7 U+1F1ED',
  },
  {
    code: 'BI',
    name: 'Burundi',
    native: 'Burundi',
    phone: '257',
    capital: 'Bujumbura',
    currency: 'BIF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Kirundi',
      },
    ],
    emoji: '🇧🇮',
    emojiU: 'U+1F1E7 U+1F1EE',
  },
  {
    code: 'BJ',
    name: 'Benin',
    native: 'Bénin',
    phone: '229',
    capital: 'Porto-Novo',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇧🇯',
    emojiU: 'U+1F1E7 U+1F1EF',
  },
  {
    code: 'BL',
    name: 'Saint Barthélemy',
    native: 'Saint-Barthélemy',
    phone: '590',
    capital: 'Gustavia',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇧🇱',
    emojiU: 'U+1F1E7 U+1F1F1',
  },
  {
    code: 'BM',
    name: 'Bermuda',
    native: 'Bermuda',
    phone: '1441',
    capital: 'Hamilton',
    currency: 'BMD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇧🇲',
    emojiU: 'U+1F1E7 U+1F1F2',
  },
  {
    code: 'BN',
    name: 'Brunei',
    native: 'Negara Brunei Darussalam',
    phone: '673',
    capital: 'Bandar Seri Begawan',
    currency: 'BND',
    languages: [
      {
        name: 'Malay',
      },
    ],
    emoji: '🇧🇳',
    emojiU: 'U+1F1E7 U+1F1F3',
  },
  {
    code: 'BO',
    name: 'Bolivia',
    native: 'Bolivia',
    phone: '591',
    capital: 'Sucre',
    currency: 'BOB,BOV',
    languages: [
      {
        name: 'Spanish',
      },
      {
        name: 'Aymara',
      },
      {
        name: 'Quechua',
      },
    ],
    emoji: '🇧🇴',
    emojiU: 'U+1F1E7 U+1F1F4',
  },
  {
    code: 'BQ',
    name: 'Bonaire',
    native: 'Bonaire',
    phone: '5997',
    capital: 'Kralendijk',
    currency: 'USD',
    languages: [
      {
        name: 'Dutch',
      },
    ],
    emoji: '🇧🇶',
    emojiU: 'U+1F1E7 U+1F1F6',
  },
  {
    code: 'BR',
    name: 'Brazil',
    native: 'Brasil',
    phone: '55',
    capital: 'Brasília',
    currency: 'BRL',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇧🇷',
    emojiU: 'U+1F1E7 U+1F1F7',
  },
  {
    code: 'BS',
    name: 'Bahamas',
    native: 'Bahamas',
    phone: '1242',
    capital: 'Nassau',
    currency: 'BSD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇧🇸',
    emojiU: 'U+1F1E7 U+1F1F8',
  },
  {
    code: 'BT',
    name: 'Bhutan',
    native: 'ʼbrug-yul',
    phone: '975',
    capital: 'Thimphu',
    currency: 'BTN,INR',
    languages: [
      {
        name: 'Dzongkha',
      },
    ],
    emoji: '🇧🇹',
    emojiU: 'U+1F1E7 U+1F1F9',
  },
  {
    code: 'BV',
    name: 'Bouvet Island',
    native: 'Bouvetøya',
    phone: '47',
    capital: null,
    currency: 'NOK',
    languages: [
      {
        name: 'Norwegian',
      },
      {
        name: 'Norwegian Bokmål',
      },
      {
        name: 'Norwegian Nynorsk',
      },
    ],
    emoji: '🇧🇻',
    emojiU: 'U+1F1E7 U+1F1FB',
  },
  {
    code: 'BW',
    name: 'Botswana',
    native: 'Botswana',
    phone: '267',
    capital: 'Gaborone',
    currency: 'BWP',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Tswana',
      },
    ],
    emoji: '🇧🇼',
    emojiU: 'U+1F1E7 U+1F1FC',
  },
  {
    code: 'BY',
    name: 'Belarus',
    native: 'Белару́сь',
    phone: '375',
    capital: 'Minsk',
    currency: 'BYN',
    languages: [
      {
        name: 'Belarusian',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇧🇾',
    emojiU: 'U+1F1E7 U+1F1FE',
  },
  {
    code: 'BZ',
    name: 'Belize',
    native: 'Belize',
    phone: '501',
    capital: 'Belmopan',
    currency: 'BZD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇧🇿',
    emojiU: 'U+1F1E7 U+1F1FF',
  },
  {
    code: 'CA',
    name: 'Canada',
    native: 'Canada',
    phone: '1',
    capital: 'Ottawa',
    currency: 'CAD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇨🇦',
    emojiU: 'U+1F1E8 U+1F1E6',
  },
  {
    code: 'CC',
    name: 'Cocos [Keeling] Islands',
    native: 'Cocos (Keeling) Islands',
    phone: '61',
    capital: 'West Island',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇨🇨',
    emojiU: 'U+1F1E8 U+1F1E8',
  },
  {
    code: 'CD',
    name: 'Democratic Republic of the Congo',
    native: 'République démocratique du Congo',
    phone: '243',
    capital: 'Kinshasa',
    currency: 'CDF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Lingala',
      },
      {
        name: 'Kongo',
      },
      {
        name: 'Swahili',
      },
      {
        name: 'Luba-Katanga',
      },
    ],
    emoji: '🇨🇩',
    emojiU: 'U+1F1E8 U+1F1E9',
  },
  {
    code: 'CF',
    name: 'Central African Republic',
    native: 'Ködörösêse tî Bêafrîka',
    phone: '236',
    capital: 'Bangui',
    currency: 'XAF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Sango',
      },
    ],
    emoji: '🇨🇫',
    emojiU: 'U+1F1E8 U+1F1EB',
  },
  {
    code: 'CG',
    name: 'Republic of the Congo',
    native: 'République du Congo',
    phone: '242',
    capital: 'Brazzaville',
    currency: 'XAF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Lingala',
      },
    ],
    emoji: '🇨🇬',
    emojiU: 'U+1F1E8 U+1F1EC',
  },
  {
    code: 'CH',
    name: 'Switzerland',
    native: 'Schweiz',
    phone: '41',
    capital: 'Bern',
    currency: 'CHE,CHF,CHW',
    languages: [
      {
        name: 'German',
      },
      {
        name: 'French',
      },
      {
        name: 'Italian',
      },
    ],
    emoji: '🇨🇭',
    emojiU: 'U+1F1E8 U+1F1ED',
  },
  {
    code: 'CI',
    name: 'Ivory Coast',
    native: "Côte d'Ivoire",
    phone: '225',
    capital: 'Yamoussoukro',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇨🇮',
    emojiU: 'U+1F1E8 U+1F1EE',
  },
  {
    code: 'CK',
    name: 'Cook Islands',
    native: 'Cook Islands',
    phone: '682',
    capital: 'Avarua',
    currency: 'NZD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇨🇰',
    emojiU: 'U+1F1E8 U+1F1F0',
  },
  {
    code: 'CL',
    name: 'Chile',
    native: 'Chile',
    phone: '56',
    capital: 'Santiago',
    currency: 'CLF,CLP',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇨🇱',
    emojiU: 'U+1F1E8 U+1F1F1',
  },
  {
    code: 'CM',
    name: 'Cameroon',
    native: 'Cameroon',
    phone: '237',
    capital: 'Yaoundé',
    currency: 'XAF',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇨🇲',
    emojiU: 'U+1F1E8 U+1F1F2',
  },
  {
    code: 'CN',
    name: 'China',
    native: '中国',
    phone: '86',
    capital: 'Beijing',
    currency: 'CNY',
    languages: [
      {
        name: 'Chinese',
      },
    ],
    emoji: '🇨🇳',
    emojiU: 'U+1F1E8 U+1F1F3',
  },
  {
    code: 'CO',
    name: 'Colombia',
    native: 'Colombia',
    phone: '57',
    capital: 'Bogotá',
    currency: 'COP',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇨🇴',
    emojiU: 'U+1F1E8 U+1F1F4',
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    native: 'Costa Rica',
    phone: '506',
    capital: 'San José',
    currency: 'CRC',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇨🇷',
    emojiU: 'U+1F1E8 U+1F1F7',
  },
  {
    code: 'CU',
    name: 'Cuba',
    native: 'Cuba',
    phone: '53',
    capital: 'Havana',
    currency: 'CUC,CUP',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇨🇺',
    emojiU: 'U+1F1E8 U+1F1FA',
  },
  {
    code: 'CV',
    name: 'Cape Verde',
    native: 'Cabo Verde',
    phone: '238',
    capital: 'Praia',
    currency: 'CVE',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇨🇻',
    emojiU: 'U+1F1E8 U+1F1FB',
  },
  {
    code: 'CW',
    name: 'Curacao',
    native: 'Curaçao',
    phone: '5999',
    capital: 'Willemstad',
    currency: 'ANG',
    languages: [
      {
        name: 'Dutch',
      },
      {
        name: 'Panjabi / Punjabi',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇨🇼',
    emojiU: 'U+1F1E8 U+1F1FC',
  },
  {
    code: 'CX',
    name: 'Christmas Island',
    native: 'Christmas Island',
    phone: '61',
    capital: 'Flying Fish Cove',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇨🇽',
    emojiU: 'U+1F1E8 U+1F1FD',
  },
  {
    code: 'CY',
    name: 'Cyprus',
    native: 'Κύπρος',
    phone: '357',
    capital: 'Nicosia',
    currency: 'EUR',
    languages: [
      {
        name: 'Greek',
      },
      {
        name: 'Turkish',
      },
      {
        name: 'Armenian',
      },
    ],
    emoji: '🇨🇾',
    emojiU: 'U+1F1E8 U+1F1FE',
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    native: 'Česká republika',
    phone: '420',
    capital: 'Prague',
    currency: 'CZK',
    languages: [
      {
        name: 'Czech',
      },
      {
        name: 'Slovak',
      },
    ],
    emoji: '🇨🇿',
    emojiU: 'U+1F1E8 U+1F1FF',
  },
  {
    code: 'DE',
    name: 'Germany',
    native: 'Deutschland',
    phone: '49',
    capital: 'Berlin',
    currency: 'EUR',
    languages: [
      {
        name: 'German',
      },
    ],
    emoji: '🇩🇪',
    emojiU: 'U+1F1E9 U+1F1EA',
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    native: 'Djibouti',
    phone: '253',
    capital: 'Djibouti',
    currency: 'DJF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇩🇯',
    emojiU: 'U+1F1E9 U+1F1EF',
  },
  {
    code: 'DK',
    name: 'Denmark',
    native: 'Danmark',
    phone: '45',
    capital: 'Copenhagen',
    currency: 'DKK',
    languages: [
      {
        name: 'Danish',
      },
    ],
    emoji: '🇩🇰',
    emojiU: 'U+1F1E9 U+1F1F0',
  },
  {
    code: 'DM',
    name: 'Dominica',
    native: 'Dominica',
    phone: '1767',
    capital: 'Roseau',
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇩🇲',
    emojiU: 'U+1F1E9 U+1F1F2',
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    native: 'República Dominicana',
    phone: '1809,1829,1849',
    capital: 'Santo Domingo',
    currency: 'DOP',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇩🇴',
    emojiU: 'U+1F1E9 U+1F1F4',
  },
  {
    code: 'DZ',
    name: 'Algeria',
    native: 'الجزائر',
    phone: '213',
    capital: 'Algiers',
    currency: 'DZD',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇩🇿',
    emojiU: 'U+1F1E9 U+1F1FF',
  },
  {
    code: 'EC',
    name: 'Ecuador',
    native: 'Ecuador',
    phone: '593',
    capital: 'Quito',
    currency: 'USD',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇪🇨',
    emojiU: 'U+1F1EA U+1F1E8',
  },
  {
    code: 'EE',
    name: 'Estonia',
    native: 'Eesti',
    phone: '372',
    capital: 'Tallinn',
    currency: 'EUR',
    languages: [
      {
        name: 'Estonian',
      },
    ],
    emoji: '🇪🇪',
    emojiU: 'U+1F1EA U+1F1EA',
  },
  {
    code: 'EG',
    name: 'Egypt',
    native: 'مصر‎',
    phone: '20',
    capital: 'Cairo',
    currency: 'EGP',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇪🇬',
    emojiU: 'U+1F1EA U+1F1EC',
  },
  {
    code: 'EH',
    name: 'Western Sahara',
    native: 'الصحراء الغربية',
    phone: '212',
    capital: 'El Aaiún',
    currency: 'MAD,DZD,MRU',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇪🇭',
    emojiU: 'U+1F1EA U+1F1ED',
  },
  {
    code: 'ER',
    name: 'Eritrea',
    native: 'ኤርትራ',
    phone: '291',
    capital: 'Asmara',
    currency: 'ERN',
    languages: [
      {
        name: 'Tigrinya',
      },
      {
        name: 'Arabic',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇪🇷',
    emojiU: 'U+1F1EA U+1F1F7',
  },
  {
    code: 'ES',
    name: 'Spain',
    native: 'España',
    phone: '34',
    capital: 'Madrid',
    currency: 'EUR',
    languages: [
      {
        name: 'Spanish',
      },
      {
        name: 'Basque',
      },
      {
        name: 'Catalan',
      },
      {
        name: 'Galician',
      },
      {
        name: 'Occitan',
      },
    ],
    emoji: '🇪🇸',
    emojiU: 'U+1F1EA U+1F1F8',
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    native: 'ኢትዮጵያ',
    phone: '251',
    capital: 'Addis Ababa',
    currency: 'ETB',
    languages: [
      {
        name: 'Amharic',
      },
    ],
    emoji: '🇪🇹',
    emojiU: 'U+1F1EA U+1F1F9',
  },
  {
    code: 'FI',
    name: 'Finland',
    native: 'Suomi',
    phone: '358',
    capital: 'Helsinki',
    currency: 'EUR',
    languages: [
      {
        name: 'Finnish',
      },
      {
        name: 'Swedish',
      },
    ],
    emoji: '🇫🇮',
    emojiU: 'U+1F1EB U+1F1EE',
  },
  {
    code: 'FJ',
    name: 'Fiji',
    native: 'Fiji',
    phone: '679',
    capital: 'Suva',
    currency: 'FJD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Fijian',
      },
      {
        name: 'Hindi',
      },
      {
        name: 'Urdu',
      },
    ],
    emoji: '🇫🇯',
    emojiU: 'U+1F1EB U+1F1EF',
  },
  {
    code: 'FK',
    name: 'Falkland Islands',
    native: 'Falkland Islands',
    phone: '500',
    capital: 'Stanley',
    currency: 'FKP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇫🇰',
    emojiU: 'U+1F1EB U+1F1F0',
  },
  {
    code: 'FM',
    name: 'Micronesia',
    native: 'Micronesia',
    phone: '691',
    capital: 'Palikir',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇫🇲',
    emojiU: 'U+1F1EB U+1F1F2',
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
    native: 'Føroyar',
    phone: '298',
    capital: 'Tórshavn',
    currency: 'DKK',
    languages: [
      {
        name: 'Faroese',
      },
    ],
    emoji: '🇫🇴',
    emojiU: 'U+1F1EB U+1F1F4',
  },
  {
    code: 'FR',
    name: 'France',
    native: 'France',
    phone: '33',
    capital: 'Paris',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇫🇷',
    emojiU: 'U+1F1EB U+1F1F7',
  },
  {
    code: 'GA',
    name: 'Gabon',
    native: 'Gabon',
    phone: '241',
    capital: 'Libreville',
    currency: 'XAF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇬🇦',
    emojiU: 'U+1F1EC U+1F1E6',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    native: 'United Kingdom',
    phone: '44',
    capital: 'London',
    currency: 'GBP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇧',
    emojiU: 'U+1F1EC U+1F1E7',
  },
  {
    code: 'GD',
    name: 'Grenada',
    native: 'Grenada',
    phone: '1473',
    capital: "St. George's",
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇩',
    emojiU: 'U+1F1EC U+1F1E9',
  },
  {
    code: 'GE',
    name: 'Georgia',
    native: 'საქართველო',
    phone: '995',
    capital: 'Tbilisi',
    currency: 'GEL',
    languages: [
      {
        name: 'Georgian',
      },
    ],
    emoji: '🇬🇪',
    emojiU: 'U+1F1EC U+1F1EA',
  },
  {
    code: 'GF',
    name: 'French Guiana',
    native: 'Guyane française',
    phone: '594',
    capital: 'Cayenne',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇬🇫',
    emojiU: 'U+1F1EC U+1F1EB',
  },
  {
    code: 'GG',
    name: 'Guernsey',
    native: 'Guernsey',
    phone: '44',
    capital: 'St. Peter Port',
    currency: 'GBP',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇬🇬',
    emojiU: 'U+1F1EC U+1F1EC',
  },
  {
    code: 'GH',
    name: 'Ghana',
    native: 'Ghana',
    phone: '233',
    capital: 'Accra',
    currency: 'GHS',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇭',
    emojiU: 'U+1F1EC U+1F1ED',
  },
  {
    code: 'GI',
    name: 'Gibraltar',
    native: 'Gibraltar',
    phone: '350',
    capital: 'Gibraltar',
    currency: 'GIP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇮',
    emojiU: 'U+1F1EC U+1F1EE',
  },
  {
    code: 'GL',
    name: 'Greenland',
    native: 'Kalaallit Nunaat',
    phone: '299',
    capital: 'Nuuk',
    currency: 'DKK',
    languages: [
      {
        name: 'Greenlandic',
      },
    ],
    emoji: '🇬🇱',
    emojiU: 'U+1F1EC U+1F1F1',
  },
  {
    code: 'GM',
    name: 'Gambia',
    native: 'Gambia',
    phone: '220',
    capital: 'Banjul',
    currency: 'GMD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇲',
    emojiU: 'U+1F1EC U+1F1F2',
  },
  {
    code: 'GN',
    name: 'Guinea',
    native: 'Guinée',
    phone: '224',
    capital: 'Conakry',
    currency: 'GNF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Peul',
      },
    ],
    emoji: '🇬🇳',
    emojiU: 'U+1F1EC U+1F1F3',
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
    native: 'Guadeloupe',
    phone: '590',
    capital: 'Basse-Terre',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇬🇵',
    emojiU: 'U+1F1EC U+1F1F5',
  },
  {
    code: 'GQ',
    name: 'Equatorial Guinea',
    native: 'Guinea Ecuatorial',
    phone: '240',
    capital: 'Malabo',
    currency: 'XAF',
    languages: [
      {
        name: 'Spanish',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇬🇶',
    emojiU: 'U+1F1EC U+1F1F6',
  },
  {
    code: 'GR',
    name: 'Greece',
    native: 'Ελλάδα',
    phone: '30',
    capital: 'Athens',
    currency: 'EUR',
    languages: [
      {
        name: 'Greek',
      },
    ],
    emoji: '🇬🇷',
    emojiU: 'U+1F1EC U+1F1F7',
  },
  {
    code: 'GS',
    name: 'South Georgia and the South Sandwich Islands',
    native: 'South Georgia',
    phone: '500',
    capital: 'King Edward Point',
    currency: 'GBP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇸',
    emojiU: 'U+1F1EC U+1F1F8',
  },
  {
    code: 'GT',
    name: 'Guatemala',
    native: 'Guatemala',
    phone: '502',
    capital: 'Guatemala City',
    currency: 'GTQ',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇬🇹',
    emojiU: 'U+1F1EC U+1F1F9',
  },
  {
    code: 'GU',
    name: 'Guam',
    native: 'Guam',
    phone: '1671',
    capital: 'Hagåtña',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Chamorro',
      },
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇬🇺',
    emojiU: 'U+1F1EC U+1F1FA',
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    native: 'Guiné-Bissau',
    phone: '245',
    capital: 'Bissau',
    currency: 'XOF',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇬🇼',
    emojiU: 'U+1F1EC U+1F1FC',
  },
  {
    code: 'GY',
    name: 'Guyana',
    native: 'Guyana',
    phone: '592',
    capital: 'Georgetown',
    currency: 'GYD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇬🇾',
    emojiU: 'U+1F1EC U+1F1FE',
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    native: '香港',
    phone: '852',
    capital: 'City of Victoria',
    currency: 'HKD',
    languages: [
      {
        name: 'Chinese',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇭🇰',
    emojiU: 'U+1F1ED U+1F1F0',
  },
  {
    code: 'HM',
    name: 'Heard Island and McDonald Islands',
    native: 'Heard Island and McDonald Islands',
    phone: '61',
    capital: null,
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇭🇲',
    emojiU: 'U+1F1ED U+1F1F2',
  },
  {
    code: 'HN',
    name: 'Honduras',
    native: 'Honduras',
    phone: '504',
    capital: 'Tegucigalpa',
    currency: 'HNL',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇭🇳',
    emojiU: 'U+1F1ED U+1F1F3',
  },
  {
    code: 'HR',
    name: 'Croatia',
    native: 'Hrvatska',
    phone: '385',
    capital: 'Zagreb',
    currency: 'HRK',
    languages: [
      {
        name: 'Croatian',
      },
    ],
    emoji: '🇭🇷',
    emojiU: 'U+1F1ED U+1F1F7',
  },
  {
    code: 'HT',
    name: 'Haiti',
    native: 'Haïti',
    phone: '509',
    capital: 'Port-au-Prince',
    currency: 'HTG,USD',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Haitian',
      },
    ],
    emoji: '🇭🇹',
    emojiU: 'U+1F1ED U+1F1F9',
  },
  {
    code: 'HU',
    name: 'Hungary',
    native: 'Magyarország',
    phone: '36',
    capital: 'Budapest',
    currency: 'HUF',
    languages: [
      {
        name: 'Hungarian',
      },
    ],
    emoji: '🇭🇺',
    emojiU: 'U+1F1ED U+1F1FA',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    native: 'Indonesia',
    phone: '62',
    capital: 'Jakarta',
    currency: 'IDR',
    languages: [
      {
        name: 'Indonesian',
      },
    ],
    emoji: '🇮🇩',
    emojiU: 'U+1F1EE U+1F1E9',
  },
  {
    code: 'IE',
    name: 'Ireland',
    native: 'Éire',
    phone: '353',
    capital: 'Dublin',
    currency: 'EUR',
    languages: [
      {
        name: 'Irish',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇮🇪',
    emojiU: 'U+1F1EE U+1F1EA',
  },
  {
    code: 'IL',
    name: 'Israel',
    native: 'יִשְׂרָאֵל',
    phone: '972',
    capital: 'Jerusalem',
    currency: 'ILS',
    languages: [
      {
        name: 'Hebrew',
      },
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇮🇱',
    emojiU: 'U+1F1EE U+1F1F1',
  },
  {
    code: 'IM',
    name: 'Isle of Man',
    native: 'Isle of Man',
    phone: '44',
    capital: 'Douglas',
    currency: 'GBP',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Manx',
      },
    ],
    emoji: '🇮🇲',
    emojiU: 'U+1F1EE U+1F1F2',
  },
  {
    code: 'IN',
    name: 'India',
    native: 'भारत',
    phone: '91',
    capital: 'New Delhi',
    currency: 'INR',
    languages: [
      {
        name: 'Hindi',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇮🇳',
    emojiU: 'U+1F1EE U+1F1F3',
  },
  {
    code: 'IO',
    name: 'British Indian Ocean Territory',
    native: 'British Indian Ocean Territory',
    phone: '246',
    capital: 'Diego Garcia',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇮🇴',
    emojiU: 'U+1F1EE U+1F1F4',
  },
  {
    code: 'IQ',
    name: 'Iraq',
    native: 'العراق',
    phone: '964',
    capital: 'Baghdad',
    currency: 'IQD',
    languages: [
      {
        name: 'Arabic',
      },
      {
        name: 'Kurdish',
      },
    ],
    emoji: '🇮🇶',
    emojiU: 'U+1F1EE U+1F1F6',
  },
  {
    code: 'IR',
    name: 'Iran',
    native: 'ایران',
    phone: '98',
    capital: 'Tehran',
    currency: 'IRR',
    languages: [
      {
        name: 'Persian',
      },
    ],
    emoji: '🇮🇷',
    emojiU: 'U+1F1EE U+1F1F7',
  },
  {
    code: 'IS',
    name: 'Iceland',
    native: 'Ísland',
    phone: '354',
    capital: 'Reykjavik',
    currency: 'ISK',
    languages: [
      {
        name: 'Icelandic',
      },
    ],
    emoji: '🇮🇸',
    emojiU: 'U+1F1EE U+1F1F8',
  },
  {
    code: 'IT',
    name: 'Italy',
    native: 'Italia',
    phone: '39',
    capital: 'Rome',
    currency: 'EUR',
    languages: [
      {
        name: 'Italian',
      },
    ],
    emoji: '🇮🇹',
    emojiU: 'U+1F1EE U+1F1F9',
  },
  {
    code: 'JE',
    name: 'Jersey',
    native: 'Jersey',
    phone: '44',
    capital: 'Saint Helier',
    currency: 'GBP',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇯🇪',
    emojiU: 'U+1F1EF U+1F1EA',
  },
  {
    code: 'JM',
    name: 'Jamaica',
    native: 'Jamaica',
    phone: '1876',
    capital: 'Kingston',
    currency: 'JMD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇯🇲',
    emojiU: 'U+1F1EF U+1F1F2',
  },
  {
    code: 'JO',
    name: 'Jordan',
    native: 'الأردن',
    phone: '962',
    capital: 'Amman',
    currency: 'JOD',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇯🇴',
    emojiU: 'U+1F1EF U+1F1F4',
  },
  {
    code: 'JP',
    name: 'Japan',
    native: '日本',
    phone: '81',
    capital: 'Tokyo',
    currency: 'JPY',
    languages: [
      {
        name: 'Japanese',
      },
    ],
    emoji: '🇯🇵',
    emojiU: 'U+1F1EF U+1F1F5',
  },
  {
    code: 'KE',
    name: 'Kenya',
    native: 'Kenya',
    phone: '254',
    capital: 'Nairobi',
    currency: 'KES',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Swahili',
      },
    ],
    emoji: '🇰🇪',
    emojiU: 'U+1F1F0 U+1F1EA',
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    native: 'Кыргызстан',
    phone: '996',
    capital: 'Bishkek',
    currency: 'KGS',
    languages: [
      {
        name: 'Kirghiz',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇰🇬',
    emojiU: 'U+1F1F0 U+1F1EC',
  },
  {
    code: 'KH',
    name: 'Cambodia',
    native: 'Kâmpŭchéa',
    phone: '855',
    capital: 'Phnom Penh',
    currency: 'KHR',
    languages: [
      {
        name: 'Cambodian',
      },
    ],
    emoji: '🇰🇭',
    emojiU: 'U+1F1F0 U+1F1ED',
  },
  {
    code: 'KI',
    name: 'Kiribati',
    native: 'Kiribati',
    phone: '686',
    capital: 'South Tarawa',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇰🇮',
    emojiU: 'U+1F1F0 U+1F1EE',
  },
  {
    code: 'KM',
    name: 'Comoros',
    native: 'Komori',
    phone: '269',
    capital: 'Moroni',
    currency: 'KMF',
    languages: [
      {
        name: 'Arabic',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇰🇲',
    emojiU: 'U+1F1F0 U+1F1F2',
  },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    native: 'Saint Kitts and Nevis',
    phone: '1869',
    capital: 'Basseterre',
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇰🇳',
    emojiU: 'U+1F1F0 U+1F1F3',
  },
  {
    code: 'KP',
    name: 'North Korea',
    native: '북한',
    phone: '850',
    capital: 'Pyongyang',
    currency: 'KPW',
    languages: [
      {
        name: 'Korean',
      },
    ],
    emoji: '🇰🇵',
    emojiU: 'U+1F1F0 U+1F1F5',
  },
  {
    code: 'KR',
    name: 'South Korea',
    native: '대한민국',
    phone: '82',
    capital: 'Seoul',
    currency: 'KRW',
    languages: [
      {
        name: 'Korean',
      },
    ],
    emoji: '🇰🇷',
    emojiU: 'U+1F1F0 U+1F1F7',
  },
  {
    code: 'KW',
    name: 'Kuwait',
    native: 'الكويت',
    phone: '965',
    capital: 'Kuwait City',
    currency: 'KWD',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇰🇼',
    emojiU: 'U+1F1F0 U+1F1FC',
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
    native: 'Cayman Islands',
    phone: '1345',
    capital: 'George Town',
    currency: 'KYD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇰🇾',
    emojiU: 'U+1F1F0 U+1F1FE',
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    native: 'Қазақстан',
    phone: '76,77',
    capital: 'Astana',
    currency: 'KZT',
    languages: [
      {
        name: 'Kazakh',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇰🇿',
    emojiU: 'U+1F1F0 U+1F1FF',
  },
  {
    code: 'LA',
    name: 'Laos',
    native: 'ສປປລາວ',
    phone: '856',
    capital: 'Vientiane',
    currency: 'LAK',
    languages: [
      {
        name: 'Laotian',
      },
    ],
    emoji: '🇱🇦',
    emojiU: 'U+1F1F1 U+1F1E6',
  },
  {
    code: 'LB',
    name: 'Lebanon',
    native: 'لبنان',
    phone: '961',
    capital: 'Beirut',
    currency: 'LBP',
    languages: [
      {
        name: 'Arabic',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇱🇧',
    emojiU: 'U+1F1F1 U+1F1E7',
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
    native: 'Saint Lucia',
    phone: '1758',
    capital: 'Castries',
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇱🇨',
    emojiU: 'U+1F1F1 U+1F1E8',
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    native: 'Liechtenstein',
    phone: '423',
    capital: 'Vaduz',
    currency: 'CHF',
    languages: [
      {
        name: 'German',
      },
    ],
    emoji: '🇱🇮',
    emojiU: 'U+1F1F1 U+1F1EE',
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    native: 'śrī laṃkāva',
    phone: '94',
    capital: 'Colombo',
    currency: 'LKR',
    languages: [
      {
        name: 'Sinhalese',
      },
      {
        name: 'Tamil',
      },
    ],
    emoji: '🇱🇰',
    emojiU: 'U+1F1F1 U+1F1F0',
  },
  {
    code: 'LR',
    name: 'Liberia',
    native: 'Liberia',
    phone: '231',
    capital: 'Monrovia',
    currency: 'LRD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇱🇷',
    emojiU: 'U+1F1F1 U+1F1F7',
  },
  {
    code: 'LS',
    name: 'Lesotho',
    native: 'Lesotho',
    phone: '266',
    capital: 'Maseru',
    currency: 'LSL,ZAR',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Southern Sotho',
      },
    ],
    emoji: '🇱🇸',
    emojiU: 'U+1F1F1 U+1F1F8',
  },
  {
    code: 'LT',
    name: 'Lithuania',
    native: 'Lietuva',
    phone: '370',
    capital: 'Vilnius',
    currency: 'EUR',
    languages: [
      {
        name: 'Lithuanian',
      },
    ],
    emoji: '🇱🇹',
    emojiU: 'U+1F1F1 U+1F1F9',
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    native: 'Luxembourg',
    phone: '352',
    capital: 'Luxembourg',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'German',
      },
      {
        name: 'Luxembourgish',
      },
    ],
    emoji: '🇱🇺',
    emojiU: 'U+1F1F1 U+1F1FA',
  },
  {
    code: 'LV',
    name: 'Latvia',
    native: 'Latvija',
    phone: '371',
    capital: 'Riga',
    currency: 'EUR',
    languages: [
      {
        name: 'Latvian',
      },
    ],
    emoji: '🇱🇻',
    emojiU: 'U+1F1F1 U+1F1FB',
  },
  {
    code: 'LY',
    name: 'Libya',
    native: '‏ليبيا',
    phone: '218',
    capital: 'Tripoli',
    currency: 'LYD',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇱🇾',
    emojiU: 'U+1F1F1 U+1F1FE',
  },
  {
    code: 'MA',
    name: 'Morocco',
    native: 'المغرب',
    phone: '212',
    capital: 'Rabat',
    currency: 'MAD',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇲🇦',
    emojiU: 'U+1F1F2 U+1F1E6',
  },
  {
    code: 'MC',
    name: 'Monaco',
    native: 'Monaco',
    phone: '377',
    capital: 'Monaco',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇲🇨',
    emojiU: 'U+1F1F2 U+1F1E8',
  },
  {
    code: 'MD',
    name: 'Moldova',
    native: 'Moldova',
    phone: '373',
    capital: 'Chișinău',
    currency: 'MDL',
    languages: [
      {
        name: 'Romanian',
      },
    ],
    emoji: '🇲🇩',
    emojiU: 'U+1F1F2 U+1F1E9',
  },
  {
    code: 'ME',
    name: 'Montenegro',
    native: 'Црна Гора',
    phone: '382',
    capital: 'Podgorica',
    currency: 'EUR',
    languages: [
      {
        name: 'Serbian',
      },
      {
        name: 'Bosnian',
      },
      {
        name: 'Albanian',
      },
      {
        name: 'Croatian',
      },
    ],
    emoji: '🇲🇪',
    emojiU: 'U+1F1F2 U+1F1EA',
  },
  {
    code: 'MF',
    name: 'Saint Martin',
    native: 'Saint-Martin',
    phone: '590',
    capital: 'Marigot',
    currency: 'EUR',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'French',
      },
      {
        name: 'Dutch',
      },
    ],
    emoji: '🇲🇫',
    emojiU: 'U+1F1F2 U+1F1EB',
  },
  {
    code: 'MG',
    name: 'Madagascar',
    native: 'Madagasikara',
    phone: '261',
    capital: 'Antananarivo',
    currency: 'MGA',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Malagasy',
      },
    ],
    emoji: '🇲🇬',
    emojiU: 'U+1F1F2 U+1F1EC',
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    native: 'M̧ajeļ',
    phone: '692',
    capital: 'Majuro',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Marshallese',
      },
    ],
    emoji: '🇲🇭',
    emojiU: 'U+1F1F2 U+1F1ED',
  },
  {
    code: 'MK',
    name: 'North Macedonia',
    native: 'Северна Македонија',
    phone: '389',
    capital: 'Skopje',
    currency: 'MKD',
    languages: [
      {
        name: 'Macedonian',
      },
    ],
    emoji: '🇲🇰',
    emojiU: 'U+1F1F2 U+1F1F0',
  },
  {
    code: 'ML',
    name: 'Mali',
    native: 'Mali',
    phone: '223',
    capital: 'Bamako',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇲🇱',
    emojiU: 'U+1F1F2 U+1F1F1',
  },
  {
    code: 'MM',
    name: 'Myanmar [Burma]',
    native: 'မြန်မာ',
    phone: '95',
    capital: 'Naypyidaw',
    currency: 'MMK',
    languages: [
      {
        name: 'Burmese',
      },
    ],
    emoji: '🇲🇲',
    emojiU: 'U+1F1F2 U+1F1F2',
  },
  {
    code: 'MN',
    name: 'Mongolia',
    native: 'Монгол улс',
    phone: '976',
    capital: 'Ulan Bator',
    currency: 'MNT',
    languages: [
      {
        name: 'Mongolian',
      },
    ],
    emoji: '🇲🇳',
    emojiU: 'U+1F1F2 U+1F1F3',
  },
  {
    code: 'MO',
    name: 'Macao',
    native: '澳門',
    phone: '853',
    capital: null,
    currency: 'MOP',
    languages: [
      {
        name: 'Chinese',
      },
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇲🇴',
    emojiU: 'U+1F1F2 U+1F1F4',
  },
  {
    code: 'MP',
    name: 'Northern Mariana Islands',
    native: 'Northern Mariana Islands',
    phone: '1670',
    capital: 'Saipan',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Chamorro',
      },
    ],
    emoji: '🇲🇵',
    emojiU: 'U+1F1F2 U+1F1F5',
  },
  {
    code: 'MQ',
    name: 'Martinique',
    native: 'Martinique',
    phone: '596',
    capital: 'Fort-de-France',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇲🇶',
    emojiU: 'U+1F1F2 U+1F1F6',
  },
  {
    code: 'MR',
    name: 'Mauritania',
    native: 'موريتانيا',
    phone: '222',
    capital: 'Nouakchott',
    currency: 'MRU',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇲🇷',
    emojiU: 'U+1F1F2 U+1F1F7',
  },
  {
    code: 'MS',
    name: 'Montserrat',
    native: 'Montserrat',
    phone: '1664',
    capital: 'Plymouth',
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇲🇸',
    emojiU: 'U+1F1F2 U+1F1F8',
  },
  {
    code: 'MT',
    name: 'Malta',
    native: 'Malta',
    phone: '356',
    capital: 'Valletta',
    currency: 'EUR',
    languages: [
      {
        name: 'Maltese',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇲🇹',
    emojiU: 'U+1F1F2 U+1F1F9',
  },
  {
    code: 'MU',
    name: 'Mauritius',
    native: 'Maurice',
    phone: '230',
    capital: 'Port Louis',
    currency: 'MUR',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇲🇺',
    emojiU: 'U+1F1F2 U+1F1FA',
  },
  {
    code: 'MV',
    name: 'Maldives',
    native: 'Maldives',
    phone: '960',
    capital: 'Malé',
    currency: 'MVR',
    languages: [
      {
        name: 'Divehi',
      },
    ],
    emoji: '🇲🇻',
    emojiU: 'U+1F1F2 U+1F1FB',
  },
  {
    code: 'MW',
    name: 'Malawi',
    native: 'Malawi',
    phone: '265',
    capital: 'Lilongwe',
    currency: 'MWK',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Chichewa',
      },
    ],
    emoji: '🇲🇼',
    emojiU: 'U+1F1F2 U+1F1FC',
  },
  {
    code: 'MX',
    name: 'Mexico',
    native: 'México',
    phone: '52',
    capital: 'Mexico City',
    currency: 'MXN',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇲🇽',
    emojiU: 'U+1F1F2 U+1F1FD',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    native: 'Malaysia',
    phone: '60',
    capital: 'Kuala Lumpur',
    currency: 'MYR',
    languages: [
      {
        name: 'Malay',
      },
    ],
    emoji: '🇲🇾',
    emojiU: 'U+1F1F2 U+1F1FE',
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    native: 'Moçambique',
    phone: '258',
    capital: 'Maputo',
    currency: 'MZN',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇲🇿',
    emojiU: 'U+1F1F2 U+1F1FF',
  },
  {
    code: 'NA',
    name: 'Namibia',
    native: 'Namibia',
    phone: '264',
    capital: 'Windhoek',
    currency: 'NAD,ZAR',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Afrikaans',
      },
    ],
    emoji: '🇳🇦',
    emojiU: 'U+1F1F3 U+1F1E6',
  },
  {
    code: 'NC',
    name: 'New Caledonia',
    native: 'Nouvelle-Calédonie',
    phone: '687',
    capital: 'Nouméa',
    currency: 'XPF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇳🇨',
    emojiU: 'U+1F1F3 U+1F1E8',
  },
  {
    code: 'NE',
    name: 'Niger',
    native: 'Niger',
    phone: '227',
    capital: 'Niamey',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇳🇪',
    emojiU: 'U+1F1F3 U+1F1EA',
  },
  {
    code: 'NF',
    name: 'Norfolk Island',
    native: 'Norfolk Island',
    phone: '672',
    capital: 'Kingston',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇳🇫',
    emojiU: 'U+1F1F3 U+1F1EB',
  },
  {
    code: 'NG',
    name: 'Nigeria',
    native: 'Nigeria',
    phone: '234',
    capital: 'Abuja',
    currency: 'NGN',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇳🇬',
    emojiU: 'U+1F1F3 U+1F1EC',
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    native: 'Nicaragua',
    phone: '505',
    capital: 'Managua',
    currency: 'NIO',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇳🇮',
    emojiU: 'U+1F1F3 U+1F1EE',
  },
  {
    code: 'NL',
    name: 'Netherlands',
    native: 'Nederland',
    phone: '31',
    capital: 'Amsterdam',
    currency: 'EUR',
    languages: [
      {
        name: 'Dutch',
      },
    ],
    emoji: '🇳🇱',
    emojiU: 'U+1F1F3 U+1F1F1',
  },
  {
    code: 'NO',
    name: 'Norway',
    native: 'Norge',
    phone: '47',
    capital: 'Oslo',
    currency: 'NOK',
    languages: [
      {
        name: 'Norwegian',
      },
      {
        name: 'Norwegian Bokmål',
      },
      {
        name: 'Norwegian Nynorsk',
      },
    ],
    emoji: '🇳🇴',
    emojiU: 'U+1F1F3 U+1F1F4',
  },
  {
    code: 'NP',
    name: 'Nepal',
    native: 'नपल',
    phone: '977',
    capital: 'Kathmandu',
    currency: 'NPR',
    languages: [
      {
        name: 'Nepali',
      },
    ],
    emoji: '🇳🇵',
    emojiU: 'U+1F1F3 U+1F1F5',
  },
  {
    code: 'NR',
    name: 'Nauru',
    native: 'Nauru',
    phone: '674',
    capital: 'Yaren',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Nauruan',
      },
    ],
    emoji: '🇳🇷',
    emojiU: 'U+1F1F3 U+1F1F7',
  },
  {
    code: 'NU',
    name: 'Niue',
    native: 'Niuē',
    phone: '683',
    capital: 'Alofi',
    currency: 'NZD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇳🇺',
    emojiU: 'U+1F1F3 U+1F1FA',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    native: 'New Zealand',
    phone: '64',
    capital: 'Wellington',
    currency: 'NZD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Maori',
      },
    ],
    emoji: '🇳🇿',
    emojiU: 'U+1F1F3 U+1F1FF',
  },
  {
    code: 'OM',
    name: 'Oman',
    native: 'عمان',
    phone: '968',
    capital: 'Muscat',
    currency: 'OMR',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇴🇲',
    emojiU: 'U+1F1F4 U+1F1F2',
  },
  {
    code: 'PA',
    name: 'Panama',
    native: 'Panamá',
    phone: '507',
    capital: 'Panama City',
    currency: 'PAB,USD',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇵🇦',
    emojiU: 'U+1F1F5 U+1F1E6',
  },
  {
    code: 'PE',
    name: 'Peru',
    native: 'Perú',
    phone: '51',
    capital: 'Lima',
    currency: 'PEN',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇵🇪',
    emojiU: 'U+1F1F5 U+1F1EA',
  },
  {
    code: 'PF',
    name: 'French Polynesia',
    native: 'Polynésie française',
    phone: '689',
    capital: 'Papeetē',
    currency: 'XPF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇵🇫',
    emojiU: 'U+1F1F5 U+1F1EB',
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    native: 'Papua Niugini',
    phone: '675',
    capital: 'Port Moresby',
    currency: 'PGK',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇵🇬',
    emojiU: 'U+1F1F5 U+1F1EC',
  },
  {
    code: 'PH',
    name: 'Philippines',
    native: 'Pilipinas',
    phone: '63',
    capital: 'Manila',
    currency: 'PHP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇵🇭',
    emojiU: 'U+1F1F5 U+1F1ED',
  },
  {
    code: 'PK',
    name: 'Pakistan',
    native: 'Pakistan',
    phone: '92',
    capital: 'Islamabad',
    currency: 'PKR',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Urdu',
      },
    ],
    emoji: '🇵🇰',
    emojiU: 'U+1F1F5 U+1F1F0',
  },
  {
    code: 'PL',
    name: 'Poland',
    native: 'Polska',
    phone: '48',
    capital: 'Warsaw',
    currency: 'PLN',
    languages: [
      {
        name: 'Polish',
      },
    ],
    emoji: '🇵🇱',
    emojiU: 'U+1F1F5 U+1F1F1',
  },
  {
    code: 'PM',
    name: 'Saint Pierre and Miquelon',
    native: 'Saint-Pierre-et-Miquelon',
    phone: '508',
    capital: 'Saint-Pierre',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇵🇲',
    emojiU: 'U+1F1F5 U+1F1F2',
  },
  {
    code: 'PN',
    name: 'Pitcairn Islands',
    native: 'Pitcairn Islands',
    phone: '64',
    capital: 'Adamstown',
    currency: 'NZD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇵🇳',
    emojiU: 'U+1F1F5 U+1F1F3',
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
    native: 'Puerto Rico',
    phone: '1787,1939',
    capital: 'San Juan',
    currency: 'USD',
    languages: [
      {
        name: 'Spanish',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇵🇷',
    emojiU: 'U+1F1F5 U+1F1F7',
  },
  {
    code: 'PS',
    name: 'Palestine',
    native: 'فلسطين',
    phone: '970',
    capital: 'Ramallah',
    currency: 'ILS',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇵🇸',
    emojiU: 'U+1F1F5 U+1F1F8',
  },
  {
    code: 'PT',
    name: 'Portugal',
    native: 'Portugal',
    phone: '351',
    capital: 'Lisbon',
    currency: 'EUR',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇵🇹',
    emojiU: 'U+1F1F5 U+1F1F9',
  },
  {
    code: 'PW',
    name: 'Palau',
    native: 'Palau',
    phone: '680',
    capital: 'Ngerulmud',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇵🇼',
    emojiU: 'U+1F1F5 U+1F1FC',
  },
  {
    code: 'PY',
    name: 'Paraguay',
    native: 'Paraguay',
    phone: '595',
    capital: 'Asunción',
    currency: 'PYG',
    languages: [
      {
        name: 'Spanish',
      },
      {
        name: 'Guarani',
      },
    ],
    emoji: '🇵🇾',
    emojiU: 'U+1F1F5 U+1F1FE',
  },
  {
    code: 'QA',
    name: 'Qatar',
    native: 'قطر',
    phone: '974',
    capital: 'Doha',
    currency: 'QAR',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇶🇦',
    emojiU: 'U+1F1F6 U+1F1E6',
  },
  {
    code: 'RE',
    name: 'Réunion',
    native: 'La Réunion',
    phone: '262',
    capital: 'Saint-Denis',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇷🇪',
    emojiU: 'U+1F1F7 U+1F1EA',
  },
  {
    code: 'RO',
    name: 'Romania',
    native: 'România',
    phone: '40',
    capital: 'Bucharest',
    currency: 'RON',
    languages: [
      {
        name: 'Romanian',
      },
    ],
    emoji: '🇷🇴',
    emojiU: 'U+1F1F7 U+1F1F4',
  },
  {
    code: 'RS',
    name: 'Serbia',
    native: 'Србија',
    phone: '381',
    capital: 'Belgrade',
    currency: 'RSD',
    languages: [
      {
        name: 'Serbian',
      },
    ],
    emoji: '🇷🇸',
    emojiU: 'U+1F1F7 U+1F1F8',
  },
  {
    code: 'RU',
    name: 'Russia',
    native: 'Россия',
    phone: '7',
    capital: 'Moscow',
    currency: 'RUB',
    languages: [
      {
        name: 'Russian',
      },
    ],
    emoji: '🇷🇺',
    emojiU: 'U+1F1F7 U+1F1FA',
  },
  {
    code: 'RW',
    name: 'Rwanda',
    native: 'Rwanda',
    phone: '250',
    capital: 'Kigali',
    currency: 'RWF',
    languages: [
      {
        name: 'Rwandi',
      },
      {
        name: 'English',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇷🇼',
    emojiU: 'U+1F1F7 U+1F1FC',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    native: 'العربية السعودية',
    phone: '966',
    capital: 'Riyadh',
    currency: 'SAR',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇸🇦',
    emojiU: 'U+1F1F8 U+1F1E6',
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
    native: 'Solomon Islands',
    phone: '677',
    capital: 'Honiara',
    currency: 'SBD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇧',
    emojiU: 'U+1F1F8 U+1F1E7',
  },
  {
    code: 'SC',
    name: 'Seychelles',
    native: 'Seychelles',
    phone: '248',
    capital: 'Victoria',
    currency: 'SCR',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇨',
    emojiU: 'U+1F1F8 U+1F1E8',
  },
  {
    code: 'SD',
    name: 'Sudan',
    native: 'السودان',
    phone: '249',
    capital: 'Khartoum',
    currency: 'SDG',
    languages: [
      {
        name: 'Arabic',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇩',
    emojiU: 'U+1F1F8 U+1F1E9',
  },
  {
    code: 'SE',
    name: 'Sweden',
    native: 'Sverige',
    phone: '46',
    capital: 'Stockholm',
    currency: 'SEK',
    languages: [
      {
        name: 'Swedish',
      },
    ],
    emoji: '🇸🇪',
    emojiU: 'U+1F1F8 U+1F1EA',
  },
  {
    code: 'SG',
    name: 'Singapore',
    native: 'Singapore',
    phone: '65',
    capital: 'Singapore',
    currency: 'SGD',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Malay',
      },
      {
        name: 'Tamil',
      },
      {
        name: 'Chinese',
      },
    ],
    emoji: '🇸🇬',
    emojiU: 'U+1F1F8 U+1F1EC',
  },
  {
    code: 'SH',
    name: 'Saint Helena',
    native: 'Saint Helena',
    phone: '290',
    capital: 'Jamestown',
    currency: 'SHP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇭',
    emojiU: 'U+1F1F8 U+1F1ED',
  },
  {
    code: 'SI',
    name: 'Slovenia',
    native: 'Slovenija',
    phone: '386',
    capital: 'Ljubljana',
    currency: 'EUR',
    languages: [
      {
        name: 'Slovenian',
      },
    ],
    emoji: '🇸🇮',
    emojiU: 'U+1F1F8 U+1F1EE',
  },
  {
    code: 'SJ',
    name: 'Svalbard and Jan Mayen',
    native: 'Svalbard og Jan Mayen',
    phone: '4779',
    capital: 'Longyearbyen',
    currency: 'NOK',
    languages: [
      {
        name: 'Norwegian',
      },
    ],
    emoji: '🇸🇯',
    emojiU: 'U+1F1F8 U+1F1EF',
  },
  {
    code: 'SK',
    name: 'Slovakia',
    native: 'Slovensko',
    phone: '421',
    capital: 'Bratislava',
    currency: 'EUR',
    languages: [
      {
        name: 'Slovak',
      },
    ],
    emoji: '🇸🇰',
    emojiU: 'U+1F1F8 U+1F1F0',
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    native: 'Sierra Leone',
    phone: '232',
    capital: 'Freetown',
    currency: 'SLL',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇱',
    emojiU: 'U+1F1F8 U+1F1F1',
  },
  {
    code: 'SM',
    name: 'San Marino',
    native: 'San Marino',
    phone: '378',
    capital: 'City of San Marino',
    currency: 'EUR',
    languages: [
      {
        name: 'Italian',
      },
    ],
    emoji: '🇸🇲',
    emojiU: 'U+1F1F8 U+1F1F2',
  },
  {
    code: 'SN',
    name: 'Senegal',
    native: 'Sénégal',
    phone: '221',
    capital: 'Dakar',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇸🇳',
    emojiU: 'U+1F1F8 U+1F1F3',
  },
  {
    code: 'SO',
    name: 'Somalia',
    native: 'Soomaaliya',
    phone: '252',
    capital: 'Mogadishu',
    currency: 'SOS',
    languages: [
      {
        name: 'Somalia',
      },
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇸🇴',
    emojiU: 'U+1F1F8 U+1F1F4',
  },
  {
    code: 'SR',
    name: 'Suriname',
    native: 'Suriname',
    phone: '597',
    capital: 'Paramaribo',
    currency: 'SRD',
    languages: [
      {
        name: 'Dutch',
      },
    ],
    emoji: '🇸🇷',
    emojiU: 'U+1F1F8 U+1F1F7',
  },
  {
    code: 'SS',
    name: 'South Sudan',
    native: 'South Sudan',
    phone: '211',
    capital: 'Juba',
    currency: 'SSP',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇸',
    emojiU: 'U+1F1F8 U+1F1F8',
  },
  {
    code: 'ST',
    name: 'São Tomé and Príncipe',
    native: 'São Tomé e Príncipe',
    phone: '239',
    capital: 'São Tomé',
    currency: 'STN',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇸🇹',
    emojiU: 'U+1F1F8 U+1F1F9',
  },
  {
    code: 'SV',
    name: 'El Salvador',
    native: 'El Salvador',
    phone: '503',
    capital: 'San Salvador',
    currency: 'SVC,USD',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇸🇻',
    emojiU: 'U+1F1F8 U+1F1FB',
  },
  {
    code: 'SX',
    name: 'Sint Maarten',
    native: 'Sint Maarten',
    phone: '1721',
    capital: 'Philipsburg',
    currency: 'ANG',
    languages: [
      {
        name: 'Dutch',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇸🇽',
    emojiU: 'U+1F1F8 U+1F1FD',
  },
  {
    code: 'SY',
    name: 'Syria',
    native: 'سوريا',
    phone: '963',
    capital: 'Damascus',
    currency: 'SYP',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇸🇾',
    emojiU: 'U+1F1F8 U+1F1FE',
  },
  {
    code: 'SZ',
    name: 'Swaziland',
    native: 'Swaziland',
    phone: '268',
    capital: 'Lobamba',
    currency: 'SZL',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Swati',
      },
    ],
    emoji: '🇸🇿',
    emojiU: 'U+1F1F8 U+1F1FF',
  },
  {
    code: 'TC',
    name: 'Turks and Caicos Islands',
    native: 'Turks and Caicos Islands',
    phone: '1649',
    capital: 'Cockburn Town',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇹🇨',
    emojiU: 'U+1F1F9 U+1F1E8',
  },
  {
    code: 'TD',
    name: 'Chad',
    native: 'Tchad',
    phone: '235',
    capital: "N'Djamena",
    currency: 'XAF',
    languages: [
      {
        name: 'French',
      },
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇹🇩',
    emojiU: 'U+1F1F9 U+1F1E9',
  },
  {
    code: 'TF',
    name: 'French Southern Territories',
    native: 'Territoire des Terres australes et antarctiques fr',
    phone: '262',
    capital: 'Port-aux-Français',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇹🇫',
    emojiU: 'U+1F1F9 U+1F1EB',
  },
  {
    code: 'TG',
    name: 'Togo',
    native: 'Togo',
    phone: '228',
    capital: 'Lomé',
    currency: 'XOF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇹🇬',
    emojiU: 'U+1F1F9 U+1F1EC',
  },
  {
    code: 'TH',
    name: 'Thailand',
    native: 'ประเทศไทย',
    phone: '66',
    capital: 'Bangkok',
    currency: 'THB',
    languages: [
      {
        name: 'Thai',
      },
    ],
    emoji: '🇹🇭',
    emojiU: 'U+1F1F9 U+1F1ED',
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
    native: 'Тоҷикистон',
    phone: '992',
    capital: 'Dushanbe',
    currency: 'TJS',
    languages: [
      {
        name: 'Tajik',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇹🇯',
    emojiU: 'U+1F1F9 U+1F1EF',
  },
  {
    code: 'TK',
    name: 'Tokelau',
    native: 'Tokelau',
    phone: '690',
    capital: 'Fakaofo',
    currency: 'NZD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇹🇰',
    emojiU: 'U+1F1F9 U+1F1F0',
  },
  {
    code: 'TL',
    name: 'East Timor',
    native: 'Timor-Leste',
    phone: '670',
    capital: 'Dili',
    currency: 'USD',
    languages: [
      {
        name: 'Portuguese',
      },
    ],
    emoji: '🇹🇱',
    emojiU: 'U+1F1F9 U+1F1F1',
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    native: 'Türkmenistan',
    phone: '993',
    capital: 'Ashgabat',
    currency: 'TMT',
    languages: [
      {
        name: 'Turkmen',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇹🇲',
    emojiU: 'U+1F1F9 U+1F1F2',
  },
  {
    code: 'TN',
    name: 'Tunisia',
    native: 'تونس',
    phone: '216',
    capital: 'Tunis',
    currency: 'TND',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇹🇳',
    emojiU: 'U+1F1F9 U+1F1F3',
  },
  {
    code: 'TO',
    name: 'Tonga',
    native: 'Tonga',
    phone: '676',
    capital: "Nuku'alofa",
    currency: 'TOP',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Tonga',
      },
    ],
    emoji: '🇹🇴',
    emojiU: 'U+1F1F9 U+1F1F4',
  },
  {
    code: 'TR',
    name: 'Turkey',
    native: 'Türkiye',
    phone: '90',
    capital: 'Ankara',
    currency: 'TRY',
    languages: [
      {
        name: 'Turkish',
      },
    ],
    emoji: '🇹🇷',
    emojiU: 'U+1F1F9 U+1F1F7',
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    native: 'Trinidad and Tobago',
    phone: '1868',
    capital: 'Port of Spain',
    currency: 'TTD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇹🇹',
    emojiU: 'U+1F1F9 U+1F1F9',
  },
  {
    code: 'TV',
    name: 'Tuvalu',
    native: 'Tuvalu',
    phone: '688',
    capital: 'Funafuti',
    currency: 'AUD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇹🇻',
    emojiU: 'U+1F1F9 U+1F1FB',
  },
  {
    code: 'TW',
    name: 'Taiwan',
    native: '臺灣',
    phone: '886',
    capital: 'Taipei',
    currency: 'TWD',
    languages: [
      {
        name: 'Chinese',
      },
    ],
    emoji: '🇹🇼',
    emojiU: 'U+1F1F9 U+1F1FC',
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    native: 'Tanzania',
    phone: '255',
    capital: 'Dodoma',
    currency: 'TZS',
    languages: [
      {
        name: 'Swahili',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇹🇿',
    emojiU: 'U+1F1F9 U+1F1FF',
  },
  {
    code: 'UA',
    name: 'Ukraine',
    native: 'Україна',
    phone: '380',
    capital: 'Kyiv',
    currency: 'UAH',
    languages: [
      {
        name: 'Ukrainian',
      },
    ],
    emoji: '🇺🇦',
    emojiU: 'U+1F1FA U+1F1E6',
  },
  {
    code: 'UG',
    name: 'Uganda',
    native: 'Uganda',
    phone: '256',
    capital: 'Kampala',
    currency: 'UGX',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Swahili',
      },
    ],
    emoji: '🇺🇬',
    emojiU: 'U+1F1FA U+1F1EC',
  },
  {
    code: 'UM',
    name: 'U.S. Minor Outlying Islands',
    native: 'United States Minor Outlying Islands',
    phone: '1',
    capital: null,
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇺🇲',
    emojiU: 'U+1F1FA U+1F1F2',
  },
  {
    code: 'US',
    name: 'United States',
    native: 'United States',
    phone: '1',
    capital: 'Washington D.C.',
    currency: 'USD,USN,USS',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇺🇸',
    emojiU: 'U+1F1FA U+1F1F8',
  },
  {
    code: 'UY',
    name: 'Uruguay',
    native: 'Uruguay',
    phone: '598',
    capital: 'Montevideo',
    currency: 'UYI,UYU',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇺🇾',
    emojiU: 'U+1F1FA U+1F1FE',
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    native: 'O‘zbekiston',
    phone: '998',
    capital: 'Tashkent',
    currency: 'UZS',
    languages: [
      {
        name: 'Uzbek',
      },
      {
        name: 'Russian',
      },
    ],
    emoji: '🇺🇿',
    emojiU: 'U+1F1FA U+1F1FF',
  },
  {
    code: 'VA',
    name: 'Vatican City',
    native: 'Vaticano',
    phone: '379',
    capital: 'Vatican City',
    currency: 'EUR',
    languages: [
      {
        name: 'Italian',
      },
      {
        name: 'Latin',
      },
    ],
    emoji: '🇻🇦',
    emojiU: 'U+1F1FB U+1F1E6',
  },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    native: 'Saint Vincent and the Grenadines',
    phone: '1784',
    capital: 'Kingstown',
    currency: 'XCD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇻🇨',
    emojiU: 'U+1F1FB U+1F1E8',
  },
  {
    code: 'VE',
    name: 'Venezuela',
    native: 'Venezuela',
    phone: '58',
    capital: 'Caracas',
    currency: 'VES',
    languages: [
      {
        name: 'Spanish',
      },
    ],
    emoji: '🇻🇪',
    emojiU: 'U+1F1FB U+1F1EA',
  },
  {
    code: 'VG',
    name: 'British Virgin Islands',
    native: 'British Virgin Islands',
    phone: '1284',
    capital: 'Road Town',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇻🇬',
    emojiU: 'U+1F1FB U+1F1EC',
  },
  {
    code: 'VI',
    name: 'U.S. Virgin Islands',
    native: 'United States Virgin Islands',
    phone: '1340',
    capital: 'Charlotte Amalie',
    currency: 'USD',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇻🇮',
    emojiU: 'U+1F1FB U+1F1EE',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    native: 'Việt Nam',
    phone: '84',
    capital: 'Hanoi',
    currency: 'VND',
    languages: [
      {
        name: 'Vietnamese',
      },
    ],
    emoji: '🇻🇳',
    emojiU: 'U+1F1FB U+1F1F3',
  },
  {
    code: 'VU',
    name: 'Vanuatu',
    native: 'Vanuatu',
    phone: '678',
    capital: 'Port Vila',
    currency: 'VUV',
    languages: [
      {
        name: 'Bislama',
      },
      {
        name: 'English',
      },
      {
        name: 'French',
      },
    ],
    emoji: '🇻🇺',
    emojiU: 'U+1F1FB U+1F1FA',
  },
  {
    code: 'WF',
    name: 'Wallis and Futuna',
    native: 'Wallis et Futuna',
    phone: '681',
    capital: 'Mata-Utu',
    currency: 'XPF',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇼🇫',
    emojiU: 'U+1F1FC U+1F1EB',
  },
  {
    code: 'WS',
    name: 'Samoa',
    native: 'Samoa',
    phone: '685',
    capital: 'Apia',
    currency: 'WST',
    languages: [
      {
        name: 'Samoan',
      },
      {
        name: 'English',
      },
    ],
    emoji: '🇼🇸',
    emojiU: 'U+1F1FC U+1F1F8',
  },
  {
    code: 'XK',
    name: 'Kosovo',
    native: 'Republika e Kosovës',
    phone: '377,381,383,386',
    capital: 'Pristina',
    currency: 'EUR',
    languages: [
      {
        name: 'Albanian',
      },
      {
        name: 'Serbian',
      },
    ],
    emoji: '🇽🇰',
    emojiU: 'U+1F1FD U+1F1F0',
  },
  {
    code: 'YE',
    name: 'Yemen',
    native: 'اليَمَن',
    phone: '967',
    capital: "Sana'a",
    currency: 'YER',
    languages: [
      {
        name: 'Arabic',
      },
    ],
    emoji: '🇾🇪',
    emojiU: 'U+1F1FE U+1F1EA',
  },
  {
    code: 'YT',
    name: 'Mayotte',
    native: 'Mayotte',
    phone: '262',
    capital: 'Mamoudzou',
    currency: 'EUR',
    languages: [
      {
        name: 'French',
      },
    ],
    emoji: '🇾🇹',
    emojiU: 'U+1F1FE U+1F1F9',
  },
  {
    code: 'ZA',
    name: 'South Africa',
    native: 'South Africa',
    phone: '27',
    capital: 'Pretoria',
    currency: 'ZAR',
    languages: [
      {
        name: 'Afrikaans',
      },
      {
        name: 'English',
      },
      {
        name: 'South Ndebele',
      },
      {
        name: 'Southern Sotho',
      },
      {
        name: 'Swati',
      },
      {
        name: 'Tswana',
      },
      {
        name: 'Tsonga',
      },
      {
        name: 'Venda',
      },
      {
        name: 'Xhosa',
      },
      {
        name: 'Zulu',
      },
    ],
    emoji: '🇿🇦',
    emojiU: 'U+1F1FF U+1F1E6',
  },
  {
    code: 'ZM',
    name: 'Zambia',
    native: 'Zambia',
    phone: '260',
    capital: 'Lusaka',
    currency: 'ZMW',
    languages: [
      {
        name: 'English',
      },
    ],
    emoji: '🇿🇲',
    emojiU: 'U+1F1FF U+1F1F2',
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    native: 'Zimbabwe',
    phone: '263',
    capital: 'Harare',
    currency: 'USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY',
    languages: [
      {
        name: 'English',
      },
      {
        name: 'Shona',
      },
      {
        name: 'North Ndebele',
      },
    ],
    emoji: '🇿🇼',
    emojiU: 'U+1F1FF U+1F1FC',
  },
];

module.exports = { countries };
