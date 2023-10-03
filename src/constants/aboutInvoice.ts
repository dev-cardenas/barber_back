import { DOCUMENT_TYPE } from './documentType'
import { CITIES } from './cities'
class ConstanteService {
  tiposDocumentos = DOCUMENT_TYPE

  /*  tiposEventos = [
      {
        codigo: 1,
        descripcion: 'Cancelación',
        situacion: 0,
      },
      {
        codigo: 2,
        descripcion: 'Inutilización',
        situacion: 1, //A futuro
      },
      {
        codigo: 3,
        descripcion: 'Endoso',
        situacion: 1, //A futuro
      },
      {
        codigo: 10,
        descripcion: 'Acuse del DE',
        situacion: 0,
      },
      {
        codigo: 11,
        descripcion: 'Conformidad del DE',
        situacion: 0,
      },
      {
        codigo: 12,
        descripcion: 'Disconformidad del DE',
        situacion: 0,
      },
      {
        codigo: 13,
        descripcion: 'Desconocimiento del DE',
        situacion: 0,
      },
    ];
  */
  tiposEmisiones = [
    {
      codigo: 1,
      descripcion: 'Normal',
    },
    {
      codigo: 2,
      descripcion: 'Contingencia',
    },
  ]

  tiposTransacciones = [
    {
      codigo: 1,
      descripcion: 'Venta de mercadería',
      situacion: 0,
    },
    {
      codigo: 2,
      descripcion: 'Prestación de servicios',
      situacion: 1,
    },
    {
      codigo: 3,
      descripcion: 'Mixto (Venta de mercadería y servicios)',
      situacion: 1,
    },
    {
      codigo: 4,
      descripcion: 'Venta de activo fijo',
      situacion: 0,
    },
    {
      codigo: 5,
      descripcion: 'Venta de divisas',
      situacion: 0,
    },
    {
      codigo: 6,
      descripcion: 'Compra de divisas',
      situacion: 0,
    },
    {
      codigo: 7,
      descripcion: 'Promoción o entrega de muestras',
      situacion: 0,
    },
    {
      codigo: 8,
      descripcion: 'Donación',
      situacion: 1,
    },
    {
      codigo: 9,
      descripcion: 'Anticipo',
      situacion: 1,
    },
    {
      codigo: 10,
      descripcion: 'Compra de productos',
      situacion: 1,
    },
    {
      codigo: 11,
      descripcion: 'Compra de servicios',
      situacion: 1,
    },
    {
      codigo: 12,
      descripcion: 'Venta de crédito fiscal',
      situacion: 1,
    },
    {
      codigo: 13,
      descripcion: 'Muestras médicas (Art. 3 RG 24/2014)',
      situacion: 1,
    },
  ]

  tiposImpuestos = [
    {
      codigo: 1,
      descripcion: 'IVA',
      situacion: 0,
    },
    {
      codigo: 2,
      descripcion: 'ISC',
      situacion: 1,
    },
    {
      codigo: 3,
      descripcion: 'Renta',
      situacion: 1,
    },
    {
      codigo: 4,
      descripcion: 'Ninguno',
      situacion: 0,
    },
    {
      codigo: 5,
      descripcion: 'IVA - Renta',
      situacion: 0,
    },
  ]

  monedas = [
    { codigo: 'AED', descripcion: 'Dirham' },
    { codigo: 'AFN', descripcion: 'Afghani' },
    { codigo: 'ALL', descripcion: 'Lek' },
    { codigo: 'AMD', descripcion: 'Dram' },
    { codigo: 'ANG', descripcion: 'Netherlands Antillian Guilder' },
    { codigo: 'AOA', descripcion: 'Kwanza' },
    { codigo: 'ARS', descripcion: 'Argentine Peso' },
    { codigo: 'AUD', descripcion: 'Australian Dollar' },
    { codigo: 'AWG', descripcion: 'Aruban Guilder' },
    { codigo: 'AZM', descripcion: 'Azerbaijanian Manat' },
    { codigo: 'BAM', descripcion: 'Convertible Mark' },
    { codigo: 'BBD', descripcion: 'Barbados Dollar' },
    { codigo: 'BYN', descripcion: 'Belarusian Ruble' },
    { codigo: 'BDT', descripcion: 'Taka' },
    { codigo: 'BGN', descripcion: 'Bulgarian Lev' },
    { codigo: 'BHD', descripcion: 'Bahraini Dinar' },
    { codigo: 'BIF', descripcion: 'Burundi Franc' },
    {
      codigo: 'BMD',
      descripcion: 'Bermudian Dollar (customarily: Bermuda Dollar)',
    },
    { codigo: 'BND', descripcion: 'Brunei Dollar' },
    { codigo: 'BOB', descripcion: 'Boliviano' },
    { codigo: 'BOV', descripcion: 'Mvdol' },
    { codigo: 'BRL', descripcion: 'Brazilian Real' },
    { codigo: 'BSD', descripcion: 'Bahamian Dollar' },
    { codigo: 'BTN', descripcion: 'Ngultrum' },
    { codigo: 'BWP', descripcion: 'Pula' },
    { codigo: 'BYR', descripcion: 'Belarussian Ruble' },
    { codigo: 'BZD', descripcion: 'Belize Dollar' },
    { codigo: 'CAD', descripcion: 'Canadian Dollar' },
    { codigo: 'CDF', descripcion: 'Franc Congolais' },
    { codigo: 'CHF', descripcion: 'Swiss Franc' },
    { codigo: 'CHE', descripcion: 'WIR Euro' },
    { codigo: 'CHW', descripcion: 'WIR Franc' },
    { codigo: 'CLP', descripcion: 'Chilean Peso' },
    { codigo: 'CLF', descripcion: 'Unidad de Fomento' },
    { codigo: 'CNY', descripcion: 'Yuan Renminbi' },
    { codigo: 'COP', descripcion: 'Colombian Peso' },
    { codigo: 'COU', descripcion: 'Unidad de Valor Real' },
    { codigo: 'CRC', descripcion: 'Costa Rican Colon' },
    { codigo: 'CUP', descripcion: 'Cuban Peso' },
    { codigo: 'CUC', descripcion: 'Peso Convertible' },
    { codigo: 'CVE', descripcion: 'Cape Verde Escudo' },
    { codigo: 'CYP', descripcion: 'Cyprus Pound' },
    { codigo: 'CZK', descripcion: 'Czech Koruna' },
    { codigo: 'DJF', descripcion: 'Djibouti Franc' },
    { codigo: 'DKK', descripcion: 'Danish Krone' },
    { codigo: 'DOP', descripcion: 'Dominican Peso' },
    { codigo: 'DZD', descripcion: 'Algerian Dinar' },
    { codigo: 'EEK', descripcion: 'Kroon' },
    { codigo: 'EGP', descripcion: 'Egyptian Pound' },
    { codigo: 'ERN', descripcion: 'Nakfa' },
    { codigo: 'ETB', descripcion: 'Ethopian Birr' },
    { codigo: 'EUR', descripcion: 'Euro' },
    { codigo: 'FJD', descripcion: 'Fiji Dollar' },
    { codigo: 'FKP', descripcion: 'Falkland Islands Pound' },
    { codigo: 'GBP', descripcion: 'Pound Sterling' },
    { codigo: 'GEL', descripcion: 'Lari' },
    { codigo: 'GHS', descripcion: 'Ghana Cedi' },
    { codigo: 'GHC', descripcion: 'Cedi' },
    { codigo: 'GIP', descripcion: 'Gibraltar Pound' },
    { codigo: 'GMD', descripcion: 'Dalasi' },
    { codigo: 'GNF', descripcion: 'Guinea Franc' },
    { codigo: 'GTQ', descripcion: 'Quetzal' },
    { codigo: 'GYD', descripcion: 'Guyana Dollar' },
    { codigo: 'HKD', descripcion: 'Honk Kong Dollar' },
    { codigo: 'HNL', descripcion: 'Lempira' },
    { codigo: 'HRK', descripcion: 'Kuna' },
    { codigo: 'HTG', descripcion: 'Gourde' },
    { codigo: 'HUF', descripcion: 'Forint' },
    { codigo: 'IDR', descripcion: 'Rupiah' },
    { codigo: 'ILS', descripcion: 'New Israeli Sheqel' },
    { codigo: 'INR', descripcion: 'Indian Rupee' },
    { codigo: 'IQD', descripcion: 'Iraqi Dinar' },
    { codigo: 'IRR', descripcion: 'Iranian Rial' },
    { codigo: 'ISK', descripcion: 'Iceland Krona' },
    { codigo: 'JMD', descripcion: 'Jamaican Dollar' },
    { codigo: 'JOD', descripcion: 'Jordanian Dinar' },
    { codigo: 'JPY', descripcion: 'Yen' },
    { codigo: 'KES', descripcion: 'Kenyan Shilling' },
    { codigo: 'KGS', descripcion: 'Som' },
    { codigo: 'KHR', descripcion: 'Riel' },
    { codigo: 'KMF', descripcion: 'Comoro Franc' },
    { codigo: 'KPW', descripcion: 'North Korean Won' },
    { codigo: 'KRW', descripcion: 'Won' },
    { codigo: 'KWD', descripcion: 'Kuwaiti Dinar' },
    { codigo: 'KYD', descripcion: 'Cayman Islands Dollar' },
    { codigo: 'KZT', descripcion: 'Tenge' },
    { codigo: 'LAK', descripcion: 'Kip' },
    { codigo: 'LBP', descripcion: 'Lebanese Pound' },
    { codigo: 'LKR', descripcion: 'Sri Lanka Rupee' },
    { codigo: 'LRD', descripcion: 'Liberian Dollar' },
    { codigo: 'LSL', descripcion: 'Loti' },
    { codigo: 'LTL', descripcion: 'Lithuanian Litas' },
    { codigo: 'LVL', descripcion: 'Latvian Lats' },
    { codigo: 'LYD', descripcion: 'Libyan Dinar' },
    { codigo: 'MAD', descripcion: 'Morrocan Dirham' },
    { codigo: 'MZN', descripcion: 'Mozambique Metical' },
    { codigo: 'MDL', descripcion: 'Moldovan Leu' },
    { codigo: 'MGF', descripcion: 'Malagasy Franc' },
    { codigo: 'MKD', descripcion: 'Denar' },
    { codigo: 'MGA', descripcion: 'Malagasy Ariary' },
    { codigo: 'MMK', descripcion: 'Kyat' },
    { codigo: 'MNT', descripcion: 'Tugrik' },
    { codigo: 'MOP', descripcion: 'Pataca' },
    { codigo: 'MRO', descripcion: 'Ouguiya' },
    { codigo: 'MTL', descripcion: 'Maltese Lira' },
    { codigo: 'MUR', descripcion: 'Mauritius Rupee' },
    { codigo: 'XUA', descripcion: 'ADB Unit of Account' },
    { codigo: 'MVR', descripcion: 'Rufiyaa' },
    { codigo: 'MRU', descripcion: 'Ouguiya' },
    { codigo: 'MWK', descripcion: 'Kwacha' },
    { codigo: 'MXN', descripcion: 'Mexican Peso' },
    { codigo: 'MXV', descripcion: 'Mexican Unidad de Inversion' },
    { codigo: 'MYR', descripcion: 'Malaysian Ringgit' },
    { codigo: 'MZM', descripcion: 'Metical' },
    { codigo: 'NAD', descripcion: 'Namibia Dollar' },
    { codigo: 'NGN', descripcion: 'Naira' },
    { codigo: 'NIO', descripcion: 'Cordoba Oro' },
    { codigo: 'NOK', descripcion: 'Norwegian Krone' },
    { codigo: 'NPR', descripcion: 'Nepalese Rupee' },
    { codigo: 'NZD', descripcion: 'New Zealand Dollar' },
    { codigo: 'OMR', descripcion: 'Rial Omani' },
    { codigo: 'PAB', descripcion: 'Balboa' },
    { codigo: 'PEN', descripcion: 'Nuevo Sol' },
    { codigo: 'PGK', descripcion: 'Kina' },
    { codigo: 'PHP', descripcion: 'Philippine Peso' },
    { codigo: 'PKR', descripcion: 'Pakistan Rupee' },
    { codigo: 'PLN', descripcion: 'Zloty' },
    { codigo: 'PYG', descripcion: 'Guarani' },
    { codigo: 'QAR', descripcion: 'Qatari Rial' },
    { codigo: 'RON', descripcion: 'Romanian Leu' },
    { codigo: 'ROL', descripcion: 'Leu' },
    { codigo: 'RUB', descripcion: 'Russian Ruble' },
    { codigo: 'RWF', descripcion: 'Rwanda Franc' },
    { codigo: 'SAR', descripcion: 'Saudi Riyal' },
    { codigo: 'RSD', descripcion: 'Serbian Dinar' },
    { codigo: 'SBD', descripcion: 'Solomon Islands Dollar' },
    { codigo: 'SCR', descripcion: 'Seychelles Rupee' },
    { codigo: 'SDD', descripcion: 'Sudanese Dinar' },
    { codigo: 'SDG', descripcion: 'Sudanese Pound' },
    { codigo: 'SRD', descripcion: 'Surinam Dollar' },
    { codigo: 'SEK', descripcion: 'Swedish Krona' },
    { codigo: 'SGD', descripcion: 'Singapore Dollar' },
    { codigo: 'SHP', descripcion: 'St. Helena Pound' },
    { codigo: 'SIT', descripcion: 'Tolar' },
    { codigo: 'SKK', descripcion: 'Slovak Koruna' },
    { codigo: 'SLL', descripcion: 'Leone' },
    { codigo: 'SOS', descripcion: 'Somali Shilling' },
    { codigo: 'SRG', descripcion: 'Suriname Guilder' },
    { codigo: 'SSP', descripcion: 'South Sudanese Pound' },
    { codigo: 'STD', descripcion: 'Dobra' },
    { codigo: 'SVC', descripcion: 'El Salvador Colon' },
    { codigo: 'SYP', descripcion: 'Syrian Pound' },
    { codigo: 'SZL', descripcion: 'Lilangeni' },
    { codigo: 'THB', descripcion: 'Baht' },
    { codigo: 'TJS', descripcion: 'Somoni' },
    { codigo: 'TMM', descripcion: 'Manat' },
    { codigo: 'TND', descripcion: 'Tunisian Dinar' },
    { codigo: 'TRY', descripcion: 'Turkish Lira' },
    { codigo: 'TMT', descripcion: 'Turkmenistan New Manat' },
    { codigo: 'TOP', descripcion: 'Pa&apos;anga' },
    { codigo: 'TRL', descripcion: 'Turkish Lira' },
    { codigo: 'TTD', descripcion: 'Trinidad and Tobago Dollar' },
    { codigo: 'TWD', descripcion: 'New Taiwan Dollar' },
    { codigo: 'TZS', descripcion: 'Tanzanian Shilling' },
    { codigo: 'UAH', descripcion: 'Hryvnia' },
    { codigo: 'UGX', descripcion: 'Uganda Shilling' },
    { codigo: 'USD', descripcion: 'US Dollar' },
    { codigo: 'USN', descripcion: 'US Dollar(Next day)' },
    { codigo: 'UYU', descripcion: 'Peso Uruguayo' },
    { codigo: 'UYI', descripcion: 'Uruguay Peso en Unidades Indexadas(UI)' },
    { codigo: 'UYW', descripcion: 'Unidad Previsional' },
    { codigo: 'UZS', descripcion: 'Uzbekistan Sum' },
    { codigo: 'VEB', descripcion: 'Bolivar' },
    { codigo: 'VND', descripcion: 'Dong' },
    { codigo: 'VUV', descripcion: 'Vatu' },
    { codigo: 'VES', descripcion: 'Bolivar Soberano' },
    { codigo: 'WST', descripcion: 'Tala' },
    { codigo: 'STN', descripcion: 'Dobra' },
    { codigo: 'XAF', descripcion: 'CFA Franc' },
    { codigo: 'XAG', descripcion: 'Silver' },
    { codigo: 'XAU', descripcion: 'Gold' },
    { codigo: 'XCD', descripcion: 'East Carribean Dollar' },
    { codigo: 'XDR', descripcion: 'SDR' },
    { codigo: 'XOF', descripcion: 'CFA Franc' },
    { codigo: 'XPD', descripcion: 'Palladium' },
    { codigo: 'XPF', descripcion: 'CFP Franc' },
    { codigo: 'XPT', descripcion: 'Platinum' },
    { codigo: 'XSU', descripcion: 'Sucre' },
    {
      codigo: 'XBA',
      descripcion: 'Bond Markets Unit European Composite Unit(EURCO)',
    },
    {
      codigo: 'XBB',
      descripcion: 'Bond Markets Unit European Monetary Unit(E.M.U.-6)',
    },
    {
      codigo: 'XBC',
      descripcion: 'Bond Markets Unit European Unit of Account 17 (E.U.A.-17)',
    },
    {
      codigo: 'XTS',
      descripcion: 'Codes specifically reserved for testing purposes',
    },
    {
      codigo: 'XXX',
      descripcion:
        'The codes assigned for transactions where no currency is involved',
    },
    { codigo: 'YER', descripcion: 'Yemeni Rial' },
    { codigo: 'YUM', descripcion: 'New Dinar' },
    { codigo: 'ZMW', descripcion: 'Zambian Kwacha' },
    { codigo: 'ZWL', descripcion: 'Zimbabwe Dollar' },
    { codigo: 'ZAR', descripcion: 'Rand' },
    { codigo: 'ZMK', descripcion: 'Kwacha' },
    { codigo: 'ZWD', descripcion: 'Zimbabwe Dollar' },
  ]

  globalPorItem = [
    {
      codigo: 1,
      descripcion: 'Global',
    },
    {
      codigo: 2,
      descripcion: 'por Item',
    },
  ]

  tiposRegimenes = [
    {
      codigo: 1,
      descripcion: 'Régimen de Turismo',
    },
    {
      codigo: 2,
      descripcion: 'Importador',
    },
    {
      codigo: 3,
      descripcion: 'Exportador',
    },
    {
      codigo: 4,
      descripcion: 'Maquila',
    },
    {
      codigo: 5,
      descripcion: 'Ley N° 60/90',
    },
    {
      codigo: 6,
      descripcion: 'Régimen del Pequeño Productor',
    },
    {
      codigo: 7,
      descripcion: 'Régimen del Mediano Productor',
    },
    {
      codigo: 8,
      descripcion: 'Régimen Contable',
    },
  ]

  tiposDocumentosIdentidades = [
    {
      codigo: 1,
      descripcion: 'Cédula paraguaya',
    },
    {
      codigo: 2,
      descripcion: 'Pasaporte',
    },
    {
      codigo: 3,
      descripcion: 'Cédula extranjera',
    },
    {
      codigo: 4,
      descripcion: 'Carnet de residencia',
    },
    {
      codigo: 9,
      descripcion: 'Otro',
    },
  ]

  tiposDocumentosReceptor = [
    {
      codigo: 1,
      descripcion: 'Cédula paraguaya',
    },
    {
      codigo: 2,
      descripcion: 'Pasaporte',
    },
    {
      codigo: 3,
      descripcion: 'Cédula extranjera',
    },
    {
      codigo: 4,
      descripcion: 'Carnet de residencia',
    },
    {
      codigo: 5,
      descripcion: 'Innominado',
    },
    {
      codigo: 6,
      descripcion: 'Tarjeta Diplomática de exoneración fiscal',
    },
    {
      codigo: 9,
      descripcion: 'No especificado',
    },
  ]

  tiposDocumentosReceptorInnominado = [
    {
      codigo: 1,
      descripcion: 'Cédula paraguaya',
    },
    {
      codigo: 2,
      descripcion: 'Pasaporte',
    },
    {
      codigo: 3,
      descripcion: 'Cédula extranjera',
    },
    {
      codigo: 4,
      descripcion: 'Carnet de residencia',
    },
    {
      codigo: 5,
      descripcion: 'Tarjeta Diplomática de exoneración fiscal',
    },
    {
      codigo: 9,
      descripcion: 'Otro',
    },
  ]

  tiposOperaciones = [
    {
      codigo: 1,
      descripcion: 'B2B',
    },
    {
      codigo: 2,
      descripcion: 'B2C',
    },
    {
      codigo: 3,
      descripcion: 'B2G',
    },
    {
      codigo: 4,
      descripcion: 'B2F',
    },
  ]

  indicadoresPresencias = [
    {
      codigo: 1,
      descripcion: 'Operación presencial',
    },
    {
      codigo: 2,
      descripcion: 'Operación electrónica',
    },
    {
      codigo: 3,
      descripcion: 'Operación telemarketing',
    },
    {
      codigo: 4,
      descripcion: 'Venta a domicilio',
    },
    {
      codigo: 5,
      descripcion: 'Operación bancaria',
    },
    {
      codigo: 6,
      descripcion: 'Operación cíclica',
    },
    {
      codigo: 9,
      descripcion: 'Otro',
    },
  ]

  tipoReceptor = [
    {
      codigo: 1,
      descripcion: 'Contribuyente',
    },
    {
      codigo: 2,
      descripcion: 'No Contribuyente',
    },
  ]

  naturalezaVendedorAutofactura = [
    {
      codigo: 1,
      descripcion: 'No contribuyente',
    },
    {
      codigo: 2,
      descripcion: 'Extranjero',
    },
  ]

  notasCreditosMotivos = [
    {
      codigo: 1,
      descripcion: 'Devolución y Ajuste de precios',
    },
    {
      codigo: 2,
      descripcion: 'Devolución',
    },
    {
      codigo: 3,
      descripcion: 'Descuento',
    },
    {
      codigo: 4,
      descripcion: 'Bonificación',
    },
    {
      codigo: 5,
      descripcion: 'Crédito incobrable',
    },
    {
      codigo: 6,
      descripcion: 'Recupero de costo',
    },
    {
      codigo: 7,
      descripcion: 'Recupero de gasto',
    },
    {
      codigo: 8,
      descripcion: 'Ajuste de precio',
    },
  ]

  remisionesMotivos = [
    {
      codigo: 1,
      descripcion: 'Traslado por ventas',
    },
    {
      codigo: 2,
      descripcion: 'Traslado por consignación',
    },
    {
      codigo: 3,
      descripcion: 'Exportación',
    },
    {
      codigo: 4,
      descripcion: 'Traslado por compra',
    },
    {
      codigo: 5,
      descripcion: 'Importación',
    },
    {
      codigo: 6,
      descripcion: 'Traslado por devolución',
    },
    {
      codigo: 7,
      descripcion: 'Traslado entre locales de la empresa',
    },
    {
      codigo: 8,
      descripcion: 'Traslado de bienes por transformación',
    },
    {
      codigo: 9,
      descripcion: 'Traslado de bienes por reparación',
    },
    {
      codigo: 10,
      descripcion: 'Traslado por emisor móvil',
    },
    {
      codigo: 11,
      descripcion: 'Exhibición o demostración',
    },
    {
      codigo: 12,
      descripcion: 'Participación en ferias',
    },
    {
      codigo: 13,
      descripcion: 'Traslado de encomienda',
    },
    {
      codigo: 14,
      descripcion: 'Decomiso',
    },
    {
      codigo: 99,
      descripcion: 'Otro',
    },
  ]

  remisionesResponsables = [
    {
      codigo: 1,
      descripcion: 'Emisor de la factura',
    },
    {
      codigo: 2,
      descripcion: 'Poseedor de la factura y bienes',
    },
    {
      codigo: 3,
      descripcion: 'Empresa transportista',
    },
    {
      codigo: 4,
      descripcion: 'Despachante de Aduanas',
    },
    {
      codigo: 5,
      descripcion: 'Agente de transporte o intermediario',
    },
  ]

  condicionesOperaciones = [
    {
      codigo: 1,
      descripcion: 'Contado',
    },
    {
      codigo: 2,
      descripcion: 'Crédito',
    },
  ]

  condicionesTiposPagos = [
    {
      codigo: 1,
      descripcion: 'Efectivo',
    },
    {
      codigo: 2,
      descripcion: 'Cheque',
    },
    {
      codigo: 3,
      descripcion: 'Tarjeta de crédito',
    },
    {
      codigo: 4,
      descripcion: 'Tarjeta de débito',
    },
    {
      codigo: 5,
      descripcion: 'Transferencia',
    },
    {
      codigo: 6,
      descripcion: 'Giro',
    },
    {
      codigo: 7,
      descripcion: 'Billetera electrónica',
    },
    {
      codigo: 8,
      descripcion: 'Tarjeta empresarial',
    },
    {
      codigo: 9,
      descripcion: 'Vale',
    },
    {
      codigo: 10,
      descripcion: 'Retención',
    },
    {
      codigo: 11,
      descripcion: 'Pago por anticipo',
    },
    {
      codigo: 12,
      descripcion: 'Valor fiscal',
    },
    {
      codigo: 13,
      descripcion: 'Valor comercial',
    },
    {
      codigo: 14,
      descripcion: 'Compensación',
    },
    {
      codigo: 15,
      descripcion: 'Permuta',
    },
    {
      codigo: 16,
      descripcion: 'Pago bancario',
    },
    {
      codigo: 17,
      descripcion: 'Pago Móvil',
    },
    {
      codigo: 18,
      descripcion: 'Donación',
    },
    {
      codigo: 19,
      descripcion: 'Promoción',
    },
    {
      codigo: 20,
      descripcion: 'Consumo Interno',
    },
    {
      codigo: 21,
      descripcion: 'Pago Electrónico',
    },
    {
      codigo: 99,
      descripcion: 'Otro',
    },
  ]

  condicionesCreditosTipos = [
    {
      codigo: 1,
      descripcion: 'Plazo',
    },
    {
      codigo: 2,
      descripcion: 'Cuota',
    },
  ]

  tarjetasCreditosTipos = [
    {
      codigo: 1,
      descripcion: 'Visa',
    },
    {
      codigo: 2,
      descripcion: 'Mastercard',
    },
    {
      codigo: 3,
      descripcion: 'American Express',
    },
    {
      codigo: 4,
      descripcion: 'Maestro',
    },
    {
      codigo: 5,
      descripcion: 'Panal',
    },
    {
      codigo: 6,
      descripcion: 'Cabal',
    },
    {
      codigo: 99,
      descripcion: 'Otro',
    },
  ]

  tarjetasCreditosFormasProcesamiento = [
    {
      codigo: 1,
      descripcion: 'POS',
    },
    {
      codigo: 2,
      descripcion: 'Pago Electrónico',
    },
    {
      codigo: 9,
      descripcion: 'Otro',
    },
  ]

  unidadesMedidas = [
    {
      codigo: 87,
      representacion: 'm     ',
      descripcion: 'Metros                      ',
    },
    {
      codigo: 2366,
      representacion: 'CPM   ',
      descripcion: 'Costo por Mil               ',
    },
    {
      codigo: 2329,
      representacion: 'UI    ',
      descripcion: 'Unidad Internacional        ',
    },
    {
      codigo: 110,
      representacion: 'M3    ',
      descripcion: 'Metros cúbicos              ',
    },
    {
      codigo: 77,
      representacion: 'UNI   ',
      descripcion: 'Unidad                      ',
    },
    {
      codigo: 86,
      representacion: 'g     ',
      descripcion: 'Gramos                      ',
    },
    {
      codigo: 89,
      representacion: 'LT    ',
      descripcion: 'Litros                      ',
    },
    {
      codigo: 90,
      representacion: 'MG    ',
      descripcion: 'Miligramos                  ',
    },
    {
      codigo: 91,
      representacion: 'CM    ',
      descripcion: 'Centimetros                 ',
    },
    {
      codigo: 92,
      representacion: 'CM2   ',
      descripcion: 'Centimetros cuadrados       ',
    },
    {
      codigo: 93,
      representacion: 'CM3   ',
      descripcion: 'Centimetros cubicos         ',
    },
    {
      codigo: 94,
      representacion: 'PUL   ',
      descripcion: 'Pulgadas                    ',
    },
    {
      codigo: 96,
      representacion: 'MM2   ',
      descripcion: 'Milímetros cuadrados        ',
    },
    {
      codigo: 79,
      representacion: 'kg/m² ',
      descripcion: 'Kilogramos s/ metro cuadrado',
    },
    {
      codigo: 97,
      representacion: 'AA    ',
      descripcion: 'Año                         ',
    },
    {
      codigo: 98,
      representacion: 'ME    ',
      descripcion: 'Mes                         ',
    },
    {
      codigo: 99,
      representacion: 'TN    ',
      descripcion: 'Tonelada                    ',
    },
    {
      codigo: 100,
      representacion: 'Hs    ',
      descripcion: 'Hora                        ',
    },
    {
      codigo: 101,
      representacion: 'Mi    ',
      descripcion: 'Minuto                      ',
    },
    {
      codigo: 104,
      representacion: 'DET   ',
      descripcion: 'Determinación               ',
    },
    {
      codigo: 103,
      representacion: 'Ya    ',
      descripcion: 'Yardas                      ',
    },
    {
      codigo: 108,
      representacion: 'MT    ',
      descripcion: 'Metros                      ',
    },
    {
      codigo: 109,
      representacion: 'M2    ',
      descripcion: 'Metros cuadrados            ',
    },
    {
      codigo: 95,
      representacion: 'MM    ',
      descripcion: 'Milímetros                  ',
    },
    {
      codigo: 666,
      representacion: 'Se    ',
      descripcion: 'Segundo                     ',
    },
    {
      codigo: 102,
      representacion: 'Di    ',
      descripcion: 'Día                         ',
    },
    {
      codigo: 83,
      representacion: 'kg    ',
      descripcion: 'Kilogramos                  ',
    },
    {
      codigo: 88,
      representacion: 'ML    ',
      descripcion: 'Mililitros                  ',
    },
    {
      codigo: 625,
      representacion: 'Km    ',
      descripcion: 'Kilómetros                  ',
    },
    {
      codigo: 660,
      representacion: 'ml    ',
      descripcion: 'Metro lineal                ',
    },
    {
      codigo: 885,
      representacion: 'GL    ',
      descripcion: 'Unidad Medida Global        ',
    },
    {
      codigo: 891,
      representacion: 'pm    ',
      descripcion: 'Por Milaje                  ',
    },
    {
      codigo: 869,
      representacion: 'ha    ',
      descripcion: 'Hectáreas                   ',
    },
    {
      codigo: 569,
      representacion: 'ración',
      descripcion: 'Ración                      ',
    },
  ]

  codigosAfectaciones = [
    {
      codigo: 1,
      descripcion: 'Gravado IVA',
    },
    {
      codigo: 2,
      // descripcion: 'Exonerado (Art.83- Ley 125/91)',
      descripcion: 'Exonerado (Art. 100 - Ley 6380/2019)',
    },
    {
      codigo: 3,
      descripcion: 'Exento',
    },
    {
      codigo: 4,
      descripcion: 'Gravado parcial (Grav- Exento)',
    },
  ]

  categoriasIsc = [
    {
      codigo: 1,
      descripcion:
        'Sección I - (Cigarrillos, Tabacos, Esencias y Otros derivados del Tabaco)',
    },
    {
      codigo: 2,
      descripcion: 'Sección II - (Bebidas con y sin alcohol)',
    },
    {
      codigo: 3,
      descripcion: 'Sección III - (Alcoholes y Derivados del alcohol)',
    },
    {
      codigo: 4,
      descripcion: 'Sección IV- (Combustibles)',
    },
    {
      codigo: 5,
      descripcion: 'Sección V- (Artículos considerados de lujo)',
    },
  ]

  tasasIsc = [
    {
      codigo: 1,
      porcentaje: 1,
    },
    {
      codigo: 2,
      porcentaje: 5,
    },
    {
      codigo: 3,
      porcentaje: 9,
    },
    {
      codigo: 4,
      porcentaje: 10,
    },
    {
      codigo: 5,
      porcentaje: 11,
    },
    {
      codigo: 6,
      porcentaje: 13,
    },
    {
      codigo: 7,
      porcentaje: 16,
    },
    {
      codigo: 8,
      porcentaje: 18,
    },
    {
      codigo: 9,
      porcentaje: 20,
    },
    {
      codigo: 10,
      porcentaje: 24,
    },
    {
      codigo: 11,
      porcentaje: 34,
    },
    {
      codigo: 12,
      porcentaje: 38,
    },
  ]

  condicionesNegociaciones = [
    {
      codigo: 'CFR',
      descripcion: 'Costo y flete',
    },
    {
      codigo: 'CIF',
      descripcion: 'Costo, seguro y flete',
    },
    {
      codigo: 'CIP',
      descripcion: 'Transporte y seguro pagados hasta',
    },
    {
      codigo: 'CPT',
      descripcion: 'Transporte pagado hasta',
    },
    {
      codigo: 'DAP',
      descripcion: 'Entregada en lugar convenido',
    },
    {
      codigo: 'DAT',
      descripcion: 'Entregada en terminal',
    },
    {
      codigo: 'DDP',
      descripcion: 'Entregada derechos pagados',
    },
    {
      codigo: 'EXW',
      descripcion: 'En fabrica',
    },
    {
      codigo: 'FAS',
      descripcion: 'Franco al costado del buque',
    },
    {
      codigo: 'FCA',
      descripcion: 'Franco transportista',
    },
    {
      codigo: 'FOB',
      descripcion: 'Franco a bordo',
    },
  ]

  relevanciasMercaderias = [
    {
      codigo: 1,
      descripcion: 'Tolerancia de quiebra',
    },
    {
      codigo: 2,
      descripcion: 'Tolerancia de merma',
    },
  ]

  tiposOperacionesVehiculos = [
    {
      codigo: 1,
      descripcion: 'Venta a representante',
    },
    {
      codigo: 2,
      descripcion: 'Venta al consumidor final',
    },
    {
      codigo: 3,
      descripcion: 'Venta a gobierno',
    },
    {
      codigo: 4,
      descripcion: 'Venta a flota de vehículos',
    },
  ]

  tiposCombustibles = [
    {
      codigo: 1,
      descripcion: 'Gasolina',
    },
    {
      codigo: 2,
      descripcion: 'Diésel',
    },
    {
      codigo: 3,
      descripcion: 'Etanol',
    },
    {
      codigo: 4,
      descripcion: 'GNV',
    },
    {
      codigo: 5,
      descripcion: 'Flex',
    },
    {
      codigo: 9,
      descripcion: 'Otro',
    },
  ]

  tiposTransportes = [
    {
      codigo: 1,
      descripcion: 'Propio',
    },
    {
      codigo: 2,
      descripcion: 'Tercero',
    },
  ]

  modalidadesTransportes = [
    {
      codigo: 1,
      descripcion: 'Terrestre',
    },
    {
      codigo: 2,
      descripcion: 'Fluvial',
    },
    {
      codigo: 3,
      descripcion: 'Aéreo',
    },
    {
      codigo: 4,
      descripcion: 'Multimodal',
    },
  ]

  responsablesFletes = [
    {
      codigo: 1,
      descripcion: 'Emisor de la Factura Electrónica',
    },
    {
      codigo: 2,
      descripcion: 'Receptor de la Factura Electrónica',
    },
    {
      codigo: 3,
      descripcion: 'Tercero',
    },
    {
      codigo: 4,
      descripcion: 'Agente intermediario del transporte (cuando intervenga)',
    },
    {
      codigo: 5,
      descripcion: 'Transporte propio',
    },
  ]

  tiposDocumentosAsociados = [
    {
      codigo: 1,
      descripcion: 'Electrónico',
    },
    {
      codigo: 2,
      descripcion: 'Impreso',
    },
    {
      codigo: 3,
      descripcion: 'Constancia Electrónica',
    },
  ]

  tiposDocumentosImpresos = [
    {
      codigo: 1,
      descripcion: 'Factura',
    },
    {
      codigo: 2,
      descripcion: 'Nota de crédito',
    },
    {
      codigo: 3,
      descripcion: 'Nota de débito',
    },
    {
      codigo: 4,
      descripcion: 'Nota de remisión',
    },
    {
      codigo: 5,
      descripcion: 'Comprobante de retención',
    },
  ]

  tiposConstancias = [
    {
      codigo: 1,
      descripcion: 'Constancia de no ser contribuyente',
    },
    {
      codigo: 2,
      descripcion: 'Constancia de microproductores',
    },
  ]

  caracteristicasCargas = [
    {
      codigo: 1,
      descripcion: 'Mercadería con cadena de frio',
    },
    {
      codigo: 2,
      descripcion: 'Carga peligrosa',
    },
    {
      codigo: 3,
      descripcion: 'Otro',
    },
  ]

  eventoConformidadTipo = [
    {
      codigo: 1,
      descripcion: 'Conformidad Total del DTE',
    },
    {
      codigo: 2,
      descripcion: 'Conformidad Parcial del DTE',
    },
  ]

  paises = [
    { codigo: 'MKD', descripcion: 'Macedonia del Norte' },
    { codigo: 'TWN', descripcion: 'Taiwán (Provincia de China)' },
    { codigo: 'DZA', descripcion: 'Argelia' },
    { codigo: 'EGY', descripcion: 'Egipto' },
    { codigo: 'LBY', descripcion: 'Libia' },
    { codigo: 'MAR', descripcion: 'Marruecos' },
    { codigo: 'SDN', descripcion: 'Sudán' },
    { codigo: 'TUN', descripcion: 'Túnez' },
    { codigo: 'ESH', descripcion: 'Sáhara Occidental' },
    { codigo: 'IOT', descripcion: 'Territorio Británico del Océano Índico' },
    { codigo: 'BDI', descripcion: 'Burundi' },
    { codigo: 'COM', descripcion: 'Comoras' },
    { codigo: 'DJI', descripcion: 'Djibouti' },
    { codigo: 'ERI', descripcion: 'Eritrea' },
    { codigo: 'ETH', descripcion: 'Etiopía' },
    {
      codigo: 'ATF',
      descripcion: 'Territorio de las Tierras Australes Francesas',
    },
    { codigo: 'KEN', descripcion: 'Kenya' },
    { codigo: 'MDG', descripcion: 'Madagascar' },
    { codigo: 'MWI', descripcion: 'Malawi' },
    { codigo: 'MUS', descripcion: 'Mauricio' },
    { codigo: 'MYT', descripcion: 'Mayotte' },
    { codigo: 'MOZ', descripcion: 'Mozambique' },
    { codigo: 'REU', descripcion: 'Reunión' },
    { codigo: 'RWA', descripcion: 'Rwanda' },
    { codigo: 'SYC', descripcion: 'Seychelles' },
    { codigo: 'SOM', descripcion: 'Somalia' },
    { codigo: 'SSD', descripcion: 'Sudán del Sur' },
    { codigo: 'UGA', descripcion: 'Uganda' },
    { codigo: 'TZA', descripcion: 'República Unida de Tanzanía' },
    { codigo: 'ZMB', descripcion: 'Zambia' },
    { codigo: 'ZWE', descripcion: 'Zimbabwe' },
    { codigo: 'AGO', descripcion: 'Angola' },
    { codigo: 'CMR', descripcion: 'Camerún' },
    { codigo: 'CAF', descripcion: 'República Centroafricana' },
    { codigo: 'TCD', descripcion: 'Chad' },
    { codigo: 'COG', descripcion: 'Congo' },
    { codigo: 'COD', descripcion: 'República Democrática del Congo' },
    { codigo: 'GNQ', descripcion: 'Guinea Ecuatorial' },
    { codigo: 'GAB', descripcion: 'Gabón' },
    { codigo: 'STP', descripcion: 'Santo Tomé y Príncipe' },
    { codigo: 'BWA', descripcion: 'Botswana' },
    { codigo: 'LSO', descripcion: 'Lesotho' },
    { codigo: 'NAM', descripcion: 'Namibia' },
    { codigo: 'ZAF', descripcion: 'Sudáfrica' },
    { codigo: 'SWZ', descripcion: 'Swazilandia' },
    { codigo: 'BEN', descripcion: 'Benin' },
    { codigo: 'BFA', descripcion: 'Burkina Faso' },
    { codigo: 'CPV', descripcion: 'Cabo Verde' },
    { codigo: 'CIV', descripcion: "Côte d'Ivoire" },
    { codigo: 'GMB', descripcion: 'Gambia' },
    { codigo: 'GHA', descripcion: 'Ghana' },
    { codigo: 'GIN', descripcion: 'Guinea' },
    { codigo: 'GNB', descripcion: 'Guinea-Bissau' },
    { codigo: 'LBR', descripcion: 'Liberia' },
    { codigo: 'MLI', descripcion: 'Malí' },
    { codigo: 'MRT', descripcion: 'Mauritania' },
    { codigo: 'NER', descripcion: 'Níger' },
    { codigo: 'NGA', descripcion: 'Nigeria' },
    { codigo: 'SHN', descripcion: 'Santa Elena' },
    { codigo: 'SEN', descripcion: 'Senegal' },
    { codigo: 'SLE', descripcion: 'Sierra Leona' },
    { codigo: 'TGO', descripcion: 'Togo' },
    { codigo: 'AIA', descripcion: 'Anguila' },
    { codigo: 'ATG', descripcion: 'Antigua y Barbuda' },
    { codigo: 'ABW', descripcion: 'Aruba' },
    { codigo: 'BHS', descripcion: 'Bahamas' },
    { codigo: 'BRB', descripcion: 'Barbados' },
    { codigo: 'BES', descripcion: 'Bonaire, San Eustaquio y Saba' },
    { codigo: 'VGB', descripcion: 'Islas Vírgenes Británicas' },
    { codigo: 'CYM', descripcion: 'Islas Caimán' },
    { codigo: 'CUB', descripcion: 'CUBA' },
    { codigo: 'CUW', descripcion: 'Curaçao' },
    { codigo: 'DMA', descripcion: 'Dominica' },
    { codigo: 'DOM', descripcion: 'República Dominicana' },
    { codigo: 'GRD', descripcion: 'Granada' },
    { codigo: 'GLP', descripcion: 'Guadalupe' },
    { codigo: 'HTI', descripcion: 'Haití' },
    { codigo: 'JAM', descripcion: 'Jamaica' },
    { codigo: 'MTQ', descripcion: 'Martinica' },
    { codigo: 'MSR', descripcion: 'Montserrat' },
    { codigo: 'PRI', descripcion: 'Puerto Rico' },
    { codigo: 'BLM', descripcion: 'San Bartolomé' },
    { codigo: 'KNA', descripcion: 'Saint Kitts y Nevis' },
    { codigo: 'LCA', descripcion: 'Santa Lucía' },
    { codigo: 'MAF', descripcion: 'San Martín (parte francesa)' },
    { codigo: 'VCT', descripcion: 'San Vicente y las Granadinas' },
    { codigo: 'SXM', descripcion: 'San Martín (parte holandés)' },
    { codigo: 'TTO', descripcion: 'Trinidad y Tabago' },
    { codigo: 'TCA', descripcion: 'Islas Turcas y Caicos' },
    { codigo: 'VIR', descripcion: 'Islas Vírgenes de los Estados Unidos' },
    { codigo: 'BLZ', descripcion: 'Belice' },
    { codigo: 'CRI', descripcion: 'Costa Rica' },
    { codigo: 'SLV', descripcion: 'El Salvador' },
    { codigo: 'GTM', descripcion: 'Guatemala' },
    { codigo: 'HND', descripcion: 'Honduras' },
    { codigo: 'MEX', descripcion: 'México' },
    { codigo: 'NIC', descripcion: 'Nicaragua' },
    { codigo: 'PAN', descripcion: 'Panamá' },
    { codigo: 'ARG', descripcion: 'Argentina' },
    { codigo: 'BOL', descripcion: 'Bolivia (Estado Plurinacional de)' },
    { codigo: 'BRA', descripcion: 'Brasil' },
    { codigo: 'CHL', descripcion: 'Chile' },
    { codigo: 'COL', descripcion: 'Colombia' },
    { codigo: 'ECU', descripcion: 'Ecuador' },
    { codigo: 'FLK', descripcion: 'Islas Malvinas (Falkland)' },
    { codigo: 'GUF', descripcion: 'Guayana Francesa' },
    { codigo: 'GUY', descripcion: 'Guyana' },
    { codigo: 'PRY', descripcion: 'Paraguay' },
    { codigo: 'PER', descripcion: 'Perú' },
    {
      codigo: 'SGS',
      descripcion: 'Georgia del Sur y las Islas Sandwich del Sur',
    },
    { codigo: 'SUR', descripcion: 'Suriname' },
    { codigo: 'URY', descripcion: 'Uruguay' },
    { codigo: 'VEN', descripcion: 'Venezuela (República Bolivariana de)' },
    { codigo: 'BMU', descripcion: 'Bermuda' },
    { codigo: 'CAN', descripcion: 'Canadá' },
    { codigo: 'GRL', descripcion: 'Groenlandia' },
    { codigo: 'SPM', descripcion: 'Saint Pierre y Miquelon' },
    { codigo: 'USA', descripcion: 'Estados Unidos de América' },
    { codigo: 'ATA', descripcion: 'Antártida' },
    { codigo: 'KAZ', descripcion: 'Kazajstán' },
    { codigo: 'KGZ', descripcion: 'Kirguistán' },
    { codigo: 'TJK', descripcion: 'Tayikistán' },
    { codigo: 'TKM', descripcion: 'Turkmenistán' },
    { codigo: 'UZB', descripcion: 'Uzbekistán' },
    { codigo: 'CHN', descripcion: 'China' },
    {
      codigo: 'HKG',
      descripcion: 'China, región administrativa especial de Hong Kong',
    },
    {
      codigo: 'MAC',
      descripcion: 'China, región administrativa especial de Macao',
    },
    { codigo: 'PRK', descripcion: 'República Popular Democrática de Corea' },
    { codigo: 'JPN', descripcion: 'Japón' },
    { codigo: 'MNG', descripcion: 'Mongolia' },
    { codigo: 'KOR', descripcion: 'República de Corea' },
    { codigo: 'BRN', descripcion: 'Brunei Darussalam' },
    { codigo: 'KHM', descripcion: 'Camboya' },
    { codigo: 'IDN', descripcion: 'Indonesia' },
    { codigo: 'LAO', descripcion: 'República Democrática Popular Lao' },
    { codigo: 'MYS', descripcion: 'Malasia' },
    { codigo: 'MMR', descripcion: 'Myanmar' },
    { codigo: 'PHL', descripcion: 'Filipinas' },
    { codigo: 'SGP', descripcion: 'Singapur' },
    { codigo: 'THA', descripcion: 'Tailandia' },
    { codigo: 'TLS', descripcion: 'Timor-Leste' },
    { codigo: 'VNM', descripcion: 'Viet Nam' },
    { codigo: 'AFG', descripcion: 'Afganistán' },
    { codigo: 'BGD', descripcion: 'Bangladesh' },
    { codigo: 'BTN', descripcion: 'Bhután' },
    { codigo: 'IND', descripcion: 'India' },
    { codigo: 'IRN', descripcion: 'Irán (República Islámica del)' },
    { codigo: 'MDV', descripcion: 'Maldivas' },
    { codigo: 'NPL', descripcion: 'Nepal' },
    { codigo: 'PAK', descripcion: 'Pakistán' },
    { codigo: 'LKA', descripcion: 'Sri Lanka' },
    { codigo: 'ARM', descripcion: 'Armenia' },
    { codigo: 'AZE', descripcion: 'Azerbaiyán' },
    { codigo: 'BHR', descripcion: 'Bahrein' },
    { codigo: 'CYP', descripcion: 'Chipre' },
    { codigo: 'GEO', descripcion: 'Georgia' },
    { codigo: 'IRQ', descripcion: 'Iraq' },
    { codigo: 'ISR', descripcion: 'Israel' },
    { codigo: 'JOR', descripcion: 'Jordania' },
    { codigo: 'KWT', descripcion: 'Kuwait' },
    { codigo: 'LBN', descripcion: 'Líbano' },
    { codigo: 'OMN', descripcion: 'Omán' },
    { codigo: 'QAT', descripcion: 'Qatar' },
    { codigo: 'SAU', descripcion: 'Arabia Saudita' },
    { codigo: 'PSE', descripcion: 'Estado de Palestina' },
    { codigo: 'SYR', descripcion: 'República Árabe Siria' },
    { codigo: 'TUR', descripcion: 'Turquía' },
    { codigo: 'ARE', descripcion: 'Emiratos Árabes Unidos' },
    { codigo: 'YEM', descripcion: 'Yemen' },
    { codigo: 'BLR', descripcion: 'Belarús' },
    { codigo: 'BGR', descripcion: 'Bulgaria' },
    { codigo: 'CZE', descripcion: 'Chequia' },
    { codigo: 'HUN', descripcion: 'Hungría' },
    { codigo: 'POL', descripcion: 'Polonia' },
    { codigo: 'MDA', descripcion: 'República de Moldova' },
    { codigo: 'ROU', descripcion: 'Rumania' },
    { codigo: 'RUS', descripcion: 'Federación de Rusia' },
    { codigo: 'SVK', descripcion: 'Eslovaquia' },
    { codigo: 'UKR', descripcion: 'Ucrania' },
    { codigo: 'ALA', descripcion: 'Islas Åland' },
    { codigo: 'GGY', descripcion: 'Guernsey' },
    { codigo: 'JEY', descripcion: 'Jersey' },
    { codigo: 'DNK', descripcion: 'Dinamarca' },
    { codigo: 'EST', descripcion: 'Estonia' },
    { codigo: 'FRO', descripcion: 'Islas Feroe' },
    { codigo: 'FIN', descripcion: 'Finlandia' },
    { codigo: 'ISL', descripcion: 'Islandia' },
    { codigo: 'IRL', descripcion: 'Irlanda' },
    { codigo: 'IMN', descripcion: 'Isla de Man' },
    { codigo: 'LVA', descripcion: 'Letonia' },
    { codigo: 'LTU', descripcion: 'Lituania' },
    { codigo: 'NOR', descripcion: 'Noruega' },
    { codigo: 'SJM', descripcion: 'Islas Svalbard y Jan Mayen' },
    { codigo: 'SWE', descripcion: 'Suecia' },
    {
      codigo: 'GBR',
      descripcion: 'Reino Unido de Gran Bretaña e Irlanda del Norte',
    },
    { codigo: 'ALB', descripcion: 'Albania' },
    { codigo: 'AND', descripcion: 'Andorra' },
    { codigo: 'BIH', descripcion: 'Bosnia y Herzegovina' },
    { codigo: 'HRV', descripcion: 'Croacia' },
    { codigo: 'GIB', descripcion: 'Gibraltar' },
    { codigo: 'GRC', descripcion: 'Grecia' },
    { codigo: 'VAT', descripcion: 'Santa Sede' },
    { codigo: 'ITA', descripcion: 'Italia' },
    { codigo: 'MLT', descripcion: 'Malta' },
    { codigo: 'MNE', descripcion: 'Montenegro' },
    { codigo: 'PRT', descripcion: 'Portugal' },
    { codigo: 'SMR', descripcion: 'San Marino' },
    { codigo: 'SRB', descripcion: 'Serbia' },
    { codigo: 'SVN', descripcion: 'Eslovenia' },
    { codigo: 'ESP', descripcion: 'España' },
    { codigo: 'MKD', descripcion: 'ex República Yugoslava de Macedonia' },
    { codigo: 'AUT', descripcion: 'Austria' },
    { codigo: 'BEL', descripcion: 'Bélgica' },
    { codigo: 'FRA', descripcion: 'Francia' },
    { codigo: 'DEU', descripcion: 'Alemania' },
    { codigo: 'LIE', descripcion: 'Liechtenstein' },
    { codigo: 'LUX', descripcion: 'Luxemburgo' },
    { codigo: 'MCO', descripcion: 'Mónaco' },
    { codigo: 'NLD', descripcion: 'Países Bajos' },
    { codigo: 'CHE', descripcion: 'Suiza' },
    { codigo: 'AUS', descripcion: 'Australia' },
    { codigo: 'CXR', descripcion: 'Isla de Navidad' },
    { codigo: 'CCK', descripcion: 'Islas Cocos (Keeling)' },
    { codigo: 'HMD', descripcion: 'Islas Heard y McDonald' },
    { codigo: 'NZL', descripcion: 'Nueva Zelandia' },
    { codigo: 'NFK', descripcion: 'Islas Norfolk' },
    { codigo: 'FJI', descripcion: 'Fiji' },
    { codigo: 'NCL', descripcion: 'Nueva Caledonia' },
    { codigo: 'PNG', descripcion: 'Papua Nueva Guinea' },
    { codigo: 'SLB', descripcion: 'Islas Salomón' },
    { codigo: 'VUT', descripcion: 'Vanuatu' },
    { codigo: 'GUM', descripcion: 'Guam' },
    { codigo: 'KIR', descripcion: 'Kiribati' },
    { codigo: 'MHL', descripcion: 'Islas Marshall' },
    { codigo: 'FSM', descripcion: 'Micronesia (Estados Federados de)' },
    { codigo: 'NRU', descripcion: 'Nauru' },
    { codigo: 'MNP', descripcion: 'Islas Marianas Septentrionales' },
    { codigo: 'PLW', descripcion: 'Palau' },
    { codigo: 'UMI', descripcion: 'Islas menores alejadas de Estados Unidos' },
    { codigo: 'ASM', descripcion: 'Samoa Americana' },
    { codigo: 'COK', descripcion: 'Islas Cook' },
    { codigo: 'PYF', descripcion: 'Polinesia Francesa' },
    { codigo: 'NIU', descripcion: 'Niue' },
    { codigo: 'PCN', descripcion: 'Pitcairn' },
    { codigo: 'WSM', descripcion: 'Samoa' },
    { codigo: 'TKL', descripcion: 'Tokelau' },
    { codigo: 'TON', descripcion: 'Tonga' },
    { codigo: 'TUV', descripcion: 'Tuvalu' },
    { codigo: 'WLF', descripcion: 'Islas Wallis y Futuna' },
    { codigo: 'NN', descripcion: 'NO EXISTE' },
  ]

  ciudades = CITIES

  distritos = [
    { codigo: 1, descripcion: 'ASUNCION (DISTRITO)', departamento: 1 },
    { codigo: 2, descripcion: 'CONCEPCION (MUNICIPIO)', departamento: 2 },
    { codigo: 3, descripcion: 'SAN LAZARO', departamento: 2 },
    { codigo: 4, descripcion: 'SAN CARLOS', departamento: 2 },
    { codigo: 5, descripcion: 'BELEN', departamento: 2 },
    { codigo: 6, descripcion: 'LORETO', departamento: 2 },
    { codigo: 7, descripcion: 'HORQUETA', departamento: 2 },
    { codigo: 8, descripcion: 'SAN SALVADOR', departamento: 2 },
    { codigo: 9, descripcion: "YBY YA'U", departamento: 2 },
    { codigo: 267, descripcion: 'SAN CARLOS DEL APA', departamento: 2 },
    { codigo: 270, descripcion: 'SARGENTO JOSE FELIX LOPEZ', departamento: 2 },
    { codigo: 280, descripcion: 'PASO BARRETO (MUNICIPIO)', departamento: 2 },
    { codigo: 281, descripcion: 'SAN ALFREDO (MUNICIPIO)', departamento: 2 },
    { codigo: 282, descripcion: 'AZOTE¿Y (MUNICIPIO)', departamento: 2 },
    { codigo: 286, descripcion: 'ARROYITO', departamento: 2 },
    { codigo: 10, descripcion: 'SAN PEDRO DE YCUAMANDYYU', departamento: 3 },
    { codigo: 11, descripcion: 'ANTEQUERA', departamento: 3 },
    { codigo: 12, descripcion: 'GRAL. E.AQUINO', departamento: 3 },
    { codigo: 13, descripcion: 'ITACURUBI DEL ROSARIO', departamento: 3 },
    { codigo: 14, descripcion: 'SAN ESTANISLAO (SANTANI)', departamento: 3 },
    { codigo: 15, descripcion: 'LIMA', departamento: 3 },
    { codigo: 16, descripcion: 'NUEVA GERMANIA', departamento: 3 },
    { codigo: 17, descripcion: 'TACUATI', departamento: 3 },
    { codigo: 18, descripcion: 'UNION', departamento: 3 },
    { codigo: 19, descripcion: '25 DE DICIEMBRE', departamento: 3 },
    { codigo: 20, descripcion: 'VILLA DEL ROSARIO', departamento: 3 },
    { codigo: 21, descripcion: 'YATAITY DEL NORTE', departamento: 3 },
    { codigo: 22, descripcion: 'ISIDORO RESQUIN', departamento: 3 },
    { codigo: 23, descripcion: 'CHORE', departamento: 3 },
    { codigo: 24, descripcion: 'SAN PABLO', departamento: 3 },
    { codigo: 25, descripcion: 'SAN JOSE DEL ROSARIO', departamento: 3 },
    { codigo: 220, descripcion: 'GUAYAIBI', departamento: 3 },
    { codigo: 226, descripcion: 'CAPIIBARY', departamento: 3 },
    { codigo: 245, descripcion: 'YRYBUCUA', departamento: 3 },
    { codigo: 263, descripcion: 'SANTA ROSA DEL AGUARAY', departamento: 3 },
    { codigo: 268, descripcion: 'LIBERACIÓN', departamento: 3 },
    { codigo: 285, descripcion: 'SAN VICENTE PANCHOLO', departamento: 3 },
    { codigo: 26, descripcion: 'CAACUPE', departamento: 4 },
    { codigo: 27, descripcion: 'ALTOS', departamento: 4 },
    { codigo: 28, descripcion: 'ARROYOS Y ESTEROS', departamento: 4 },
    { codigo: 29, descripcion: 'ATYRA', departamento: 4 },
    { codigo: 30, descripcion: 'CARAGUATAY', departamento: 4 },
    { codigo: 31, descripcion: 'EMBOSCADA', departamento: 4 },
    { codigo: 32, descripcion: 'EUSEBIO AYALA', departamento: 4 },
    { codigo: 33, descripcion: 'ISLA PUCU', departamento: 4 },
    { codigo: 34, descripcion: 'ITACURUBI DE LA CORDILLERA', departamento: 4 },
    { codigo: 35, descripcion: 'JUAN DE MENA', departamento: 4 },
    { codigo: 36, descripcion: 'NUEVA COLOMBIA', departamento: 4 },
    { codigo: 37, descripcion: 'PIRIBEBUY', departamento: 4 },
    { codigo: 38, descripcion: '1RO.DE MARZO', departamento: 4 },
    { codigo: 39, descripcion: 'SAN BERNARDINO', departamento: 4 },
    { codigo: 40, descripcion: 'SANTA ELENA', departamento: 4 },
    { codigo: 41, descripcion: 'TOBATI', departamento: 4 },
    { codigo: 42, descripcion: 'VALENZUELA', departamento: 4 },
    { codigo: 43, descripcion: 'LOMA GRANDE', departamento: 4 },
    { codigo: 44, descripcion: 'SAN JOSE OBRERO', departamento: 4 },
    { codigo: 214, descripcion: 'MBOCAYATY DEL YHAGUY', departamento: 4 },
    { codigo: 45, descripcion: 'VILLARRICA', departamento: 5 },
    { codigo: 46, descripcion: 'SAN SALVADOR', departamento: 5 },
    { codigo: 47, descripcion: 'BORJA', departamento: 5 },
    {
      codigo: 48,
      descripcion: 'INDEPENDENCIA (R.D.MELGAREJO)',
      departamento: 5,
    },
    { codigo: 49, descripcion: 'GRAL.EUGENIO A. GARAY', departamento: 5 },
    { codigo: 50, descripcion: 'CNEL. MARTINEZ', departamento: 5 },
    { codigo: 51, descripcion: 'JOSE FASSARDI', departamento: 5 },
    { codigo: 52, descripcion: 'FELIX PEREZ CARDOZO', departamento: 5 },
    { codigo: 53, descripcion: 'MAURICIO JOSE TROCHE', departamento: 5 },
    { codigo: 54, descripcion: 'ITAPE', departamento: 5 },
    { codigo: 55, descripcion: 'ITURBE', departamento: 5 },
    { codigo: 56, descripcion: 'MBOCAYATY', departamento: 5 },
    { codigo: 57, descripcion: 'NATALICIO TALAVERA', departamento: 5 },
    { codigo: 58, descripcion: 'ÑUMI', departamento: 5 },
    { codigo: 59, descripcion: 'YATAITY', departamento: 5 },
    { codigo: 60, descripcion: 'DR. BOTREL', departamento: 5 },
    { codigo: 225, descripcion: 'PASO YOBAY', departamento: 5 },
    { codigo: 246, descripcion: 'SIN EQUIVALENCIA', departamento: 5 },
    { codigo: 265, descripcion: 'TEBICUARY', departamento: 5 },
    { codigo: 61, descripcion: 'CNEL. OVIEDO', departamento: 6 },
    { codigo: 62, descripcion: 'CAAGUAZU', departamento: 6 },
    { codigo: 63, descripcion: 'CARAYAO', departamento: 6 },
    { codigo: 64, descripcion: 'CECILIO BAEZ', departamento: 6 },
    { codigo: 65, descripcion: 'NUEVA LONDRES', departamento: 6 },
    { codigo: 66, descripcion: 'SAN JOAQUIN', departamento: 6 },
    { codigo: 67, descripcion: 'SAN JOSE DE LOS ARROYOS', departamento: 6 },
    { codigo: 68, descripcion: 'YHU', departamento: 6 },
    { codigo: 69, descripcion: 'JUAN MANUEL FRUTOS', departamento: 6 },
    { codigo: 70, descripcion: 'REPATRIACION', departamento: 6 },
    { codigo: 71, descripcion: 'SANTA ROSA DEL MBUTUY', departamento: 6 },
    { codigo: 72, descripcion: 'J. EULOGIO ESTIGARRIBIA', departamento: 6 },
    { codigo: 73, descripcion: 'JOSE D. OCAMPOS', departamento: 6 },
    { codigo: 74, descripcion: 'R.I.3 CORRALES', departamento: 6 },
    { codigo: 75, descripcion: 'RAUL A. OVIEDO', departamento: 6 },
    { codigo: 76, descripcion: 'MCAL.F.SOLANO LOPEZ', departamento: 6 },
    { codigo: 227, descripcion: '3 DE FEBRERO', departamento: 6 },
    { codigo: 228, descripcion: 'SIMON BOLIVAR', departamento: 6 },
    { codigo: 229, descripcion: 'LA PASTORA', departamento: 6 },
    { codigo: 237, descripcion: 'VAQUERIA', departamento: 6 },
    { codigo: 244, descripcion: 'ESCULIES', departamento: 6 },
    { codigo: 275, descripcion: 'TEMBIAPORA', departamento: 6 },
    { codigo: 276, descripcion: 'NUEVA TOLEDO', departamento: 6 },
    { codigo: 77, descripcion: 'CAAZAPA', departamento: 7 },
    { codigo: 78, descripcion: 'BUENA VISTA', departamento: 7 },
    { codigo: 79, descripcion: 'GRAL. H. MORINIGO', departamento: 7 },
    { codigo: 80, descripcion: 'MACIEL', departamento: 7 },
    { codigo: 81, descripcion: 'MOISES BERTONI', departamento: 7 },
    { codigo: 82, descripcion: 'SAN JUAN NEPOMUCENO', departamento: 7 },
    { codigo: 83, descripcion: 'ABAI', departamento: 7 },
    { codigo: 84, descripcion: 'TAVAI', departamento: 7 },
    { codigo: 85, descripcion: 'YEGROS', departamento: 7 },
    { codigo: 86, descripcion: 'YUTY', departamento: 7 },
    { codigo: 272, descripcion: '3 DE MAYO', departamento: 7 },
    { codigo: 87, descripcion: 'ENCARNACION', departamento: 8 },
    { codigo: 88, descripcion: 'BELLA VISTA', departamento: 8 },
    { codigo: 89, descripcion: 'CAMBYRETA', departamento: 8 },
    { codigo: 90, descripcion: 'CAPITAN MEZA', departamento: 8 },
    { codigo: 91, descripcion: 'CARMEN DEL PARANA', departamento: 8 },
    { codigo: 92, descripcion: 'CAPITAN MIRANDA', departamento: 8 },
    { codigo: 93, descripcion: 'CORONEL BOGADO', departamento: 8 },
    { codigo: 94, descripcion: 'FRAM', departamento: 8 },
    { codigo: 95, descripcion: 'GRAL. ARTIGAS', departamento: 8 },
    { codigo: 96, descripcion: 'GRAL. DELGADO', departamento: 8 },
    { codigo: 97, descripcion: 'HOHENAU', departamento: 8 },
    { codigo: 98, descripcion: 'JESUS', departamento: 8 },
    { codigo: 99, descripcion: 'OBLIGADO', departamento: 8 },
    { codigo: 100, descripcion: 'SAN COSME Y DAMIAN', departamento: 8 },
    { codigo: 101, descripcion: 'SAN PEDRO DEL PARANA', departamento: 8 },
    { codigo: 102, descripcion: 'NUEVA ALBORADA', departamento: 8 },
    { codigo: 103, descripcion: 'TRINIDAD', departamento: 8 },
    { codigo: 104, descripcion: 'NATALIO', departamento: 8 },
    { codigo: 105, descripcion: 'JOSE LEANDRO OVIEDO', departamento: 8 },
    { codigo: 106, descripcion: 'SAN RAFAEL DEL PARANA', departamento: 8 },
    { codigo: 107, descripcion: 'CARLOS A. LOPEZ', departamento: 8 },
    { codigo: 108, descripcion: 'JULIO D. OTAÑO', departamento: 8 },
    { codigo: 109, descripcion: 'EDELIRA', departamento: 8 },
    { codigo: 110, descripcion: 'SAN JUAN DEL PARANA', departamento: 8 },
    { codigo: 111, descripcion: 'LA PAZ', departamento: 8 },
    { codigo: 112, descripcion: 'TOMAS R. PEREIRA', departamento: 8 },
    { codigo: 113, descripcion: 'YATYTAY', departamento: 8 },
    { codigo: 114, descripcion: 'HERIBERTA S.DE IGLESIAS', departamento: 8 },
    { codigo: 221, descripcion: 'PIRAPO', departamento: 8 },
    { codigo: 232, descripcion: 'ITAPUA POTY', departamento: 8 },
    { codigo: 243, descripcion: 'FEDERICO CHAVEZ', departamento: 8 },
    { codigo: 262, descripcion: 'ALTO VERA', departamento: 8 },
    { codigo: 115, descripcion: 'SAN JUAN BAUTISTA', departamento: 9 },
    { codigo: 116, descripcion: 'AYOLAS', departamento: 9 },
    { codigo: 117, descripcion: 'SAN IGNACIO', departamento: 9 },
    { codigo: 118, descripcion: 'SAN MIGUEL', departamento: 9 },
    { codigo: 119, descripcion: 'SAN PATRICIO', departamento: 9 },
    { codigo: 120, descripcion: 'SANTIAGO', departamento: 9 },
    { codigo: 121, descripcion: 'SANTA MARIA', departamento: 9 },
    { codigo: 122, descripcion: 'SANTA ROSA', departamento: 9 },
    { codigo: 123, descripcion: 'VILLA FLORIDA', departamento: 9 },
    { codigo: 124, descripcion: 'YABEBYRY', departamento: 9 },
    { codigo: 125, descripcion: 'PARAGUARI', departamento: 10 },
    { codigo: 126, descripcion: 'ACAHAY', departamento: 10 },
    { codigo: 127, descripcion: 'CAAPUCU', departamento: 10 },
    { codigo: 128, descripcion: 'CABALLERO', departamento: 10 },
    { codigo: 129, descripcion: 'CARAPEGUA', departamento: 10 },
    { codigo: 130, descripcion: 'LA COLMENA', departamento: 10 },
    { codigo: 131, descripcion: 'ESCOBAR', departamento: 10 },
    { codigo: 132, descripcion: 'MBUYAPEY', departamento: 10 },
    { codigo: 133, descripcion: 'PIRAYU', departamento: 10 },
    { codigo: 134, descripcion: 'QUIINDY', departamento: 10 },
    { codigo: 135, descripcion: 'ROQUE GONZALEZ', departamento: 10 },
    { codigo: 136, descripcion: 'SAPUCAI', departamento: 10 },
    { codigo: 137, descripcion: 'YBYCUI', departamento: 10 },
    { codigo: 138, descripcion: 'QUYQUYHO', departamento: 10 },
    { codigo: 139, descripcion: 'YBYTYMI', departamento: 10 },
    { codigo: 140, descripcion: 'TEBICUARY MI', departamento: 10 },
    { codigo: 141, descripcion: 'YAGUARON', departamento: 10 },
    { codigo: 142, descripcion: 'HERNANDARIAS', departamento: 11 },
    { codigo: 143, descripcion: 'DOMINGO MARTINEZ DE IRALA', departamento: 11 },
    { codigo: 144, descripcion: 'ÑACUNDAY', departamento: 11 },
    { codigo: 145, descripcion: 'CIUDAD DEL ESTE', departamento: 11 },
    { codigo: 146, descripcion: 'JUAN LEON MALLORQUIN', departamento: 11 },
    { codigo: 147, descripcion: 'ITAKYRY', departamento: 11 },
    { codigo: 148, descripcion: "JUAN E.O'LEARY", departamento: 11 },
    { codigo: 149, descripcion: 'PRESIDENTE FRANCO', departamento: 11 },
    { codigo: 150, descripcion: 'YGUAZU', departamento: 11 },
    { codigo: 151, descripcion: 'SAN CRISTOBAL', departamento: 11 },
    { codigo: 209, descripcion: 'SANTA RITA', departamento: 11 },
    { codigo: 210, descripcion: 'MINGA GUAZU', departamento: 11 },
    { codigo: 211, descripcion: 'LOS CEDRALES', departamento: 11 },
    { codigo: 212, descripcion: 'SAN ALBERTO', departamento: 11 },
    { codigo: 213, descripcion: 'MINGA PORA', departamento: 11 },
    { codigo: 215, descripcion: 'NARANJAL', departamento: 11 },
    { codigo: 216, descripcion: 'SANTA ROSA DEL MONDAY', departamento: 11 },
    { codigo: 217, descripcion: 'IRUÑA', departamento: 11 },
    { codigo: 219, descripcion: 'MBARACAYU', departamento: 11 },
    { codigo: 239, descripcion: 'SANTA FE DEL PARANA', departamento: 11 },
    { codigo: 240, descripcion: 'NUEVA ESPERANZA', departamento: 11 },
    { codigo: 269, descripcion: 'TAVAPY', departamento: 11 },
    { codigo: 273, descripcion: 'DR. RAUL PEÑA', departamento: 11 },
    { codigo: 152, descripcion: 'AREGUA', departamento: 12 },
    { codigo: 153, descripcion: 'CAPIATA', departamento: 12 },
    { codigo: 154, descripcion: 'FERNANDO DE LA MORA', departamento: 12 },
    { codigo: 155, descripcion: 'GUARAMBARE', departamento: 12 },
    { codigo: 156, descripcion: 'ITA', departamento: 12 },
    { codigo: 157, descripcion: 'ITAUGUA', departamento: 12 },
    { codigo: 158, descripcion: 'LIMPIO', departamento: 12 },
    { codigo: 159, descripcion: 'LUQUE', departamento: 12 },
    { codigo: 160, descripcion: 'MARIANO ROQUE ALONSO', departamento: 12 },
    { codigo: 161, descripcion: 'ÑEMBY', departamento: 12 },
    { codigo: 162, descripcion: 'NUEVA ITALIA', departamento: 12 },
    { codigo: 163, descripcion: 'SAN ANTONIO', departamento: 12 },
    { codigo: 164, descripcion: 'SAN LORENZO', departamento: 12 },
    { codigo: 165, descripcion: 'VILLA ELISA', departamento: 12 },
    { codigo: 166, descripcion: 'VILLETA', departamento: 12 },
    { codigo: 167, descripcion: 'YPACARAI', departamento: 12 },
    { codigo: 168, descripcion: 'YPANE', departamento: 12 },
    { codigo: 169, descripcion: 'LAMBARE', departamento: 12 },
    { codigo: 170, descripcion: 'J.AUGUSTO SALDIVAR', departamento: 12 },
    { codigo: 277, descripcion: 'LOMA PYTA', departamento: 12 },
    { codigo: 171, descripcion: 'PILAR', departamento: 13 },
    { codigo: 172, descripcion: 'ALBERDI', departamento: 13 },
    { codigo: 173, descripcion: 'CERRITO', departamento: 13 },
    { codigo: 174, descripcion: 'DESMOCHADOS', departamento: 13 },
    { codigo: 175, descripcion: 'GUAZU CUA', departamento: 13 },
    { codigo: 176, descripcion: 'HUMAITA', departamento: 13 },
    { codigo: 177, descripcion: 'ISLA UMBU', departamento: 13 },
    { codigo: 178, descripcion: 'LAURELES', departamento: 13 },
    { codigo: 179, descripcion: 'PASO DE PATRIA', departamento: 13 },
    { codigo: 180, descripcion: 'MAYOR J.D.MARTINEZ', departamento: 13 },
    { codigo: 181, descripcion: 'SAN JUAN DE ÑEEMBUCU', departamento: 13 },
    { codigo: 182, descripcion: 'TACUARAS', departamento: 13 },
    { codigo: 183, descripcion: 'VILLA OLIVA', departamento: 13 },
    { codigo: 184, descripcion: 'VILLALBIN', departamento: 13 },
    { codigo: 203, descripcion: 'GRAL.JOSE EDUVIGIS DIAZ', departamento: 13 },
    { codigo: 205, descripcion: 'VILLA FRANCA', departamento: 13 },
    { codigo: 230, descripcion: 'VILLA FRANCA', departamento: 13 },
    { codigo: 231, descripcion: 'VILLALBIN', departamento: 13 },
    { codigo: 185, descripcion: 'PEDRO JUAN CABALLERO', departamento: 14 },
    { codigo: 186, descripcion: 'BELLA VISTA', departamento: 14 },
    { codigo: 187, descripcion: 'CAPITAN BADO', departamento: 14 },
    { codigo: 278, descripcion: 'KARAPAI', departamento: 14 },
    { codigo: 279, descripcion: 'ZANJA PYTA', departamento: 14 },
    { codigo: 188, descripcion: 'VILLA HAYES', departamento: 15 },
    {
      codigo: 189,
      descripcion: 'BENJAMIN ACEVAL(MONTE SOCIEDAD',
      departamento: 15,
    },
    { codigo: 190, descripcion: 'PTO.PINAZCO', departamento: 15 },
    { codigo: 191, descripcion: 'NANAWA', departamento: 15 },
    { codigo: 206, descripcion: 'POZO COLORADO', departamento: 15 },
    { codigo: 242, descripcion: 'JOSE FALCON', departamento: 15 },
    { codigo: 261, descripcion: 'TTE. 1RO. IRALA FERNANDEZ', departamento: 15 },
    { codigo: 264, descripcion: 'TENIENTE ESTEBAN MARTINEZ', departamento: 15 },
    { codigo: 192, descripcion: 'MCAL.ESTIGARRIBIA', departamento: 16 },
    { codigo: 193, descripcion: 'BOQUERON', departamento: 16 },
    { codigo: 194, descripcion: 'PEDRO P.PEÑA', departamento: 16 },
    { codigo: 234, descripcion: 'GRAL. EUGENIO A. GARAY', departamento: 16 },
    { codigo: 259, descripcion: 'FILADELFIA', departamento: 16 },
    { codigo: 260, descripcion: 'LOMA PLATA', departamento: 16 },
    { codigo: 195, descripcion: 'FUERTE OLIMPO', departamento: 17 },
    { codigo: 196, descripcion: 'BAHIA NEGRA', departamento: 17 },
    { codigo: 218, descripcion: 'PUERTO CASADO', departamento: 17 },
    { codigo: 223, descripcion: 'PUERTO GUARANI', departamento: 17 },
    { codigo: 233, descripcion: 'MAYOR PABLO LAGERENZA', departamento: 17 },
    { codigo: 266, descripcion: 'CARMELO PERALTA', departamento: 17 },
    { codigo: 197, descripcion: 'SAN ISIDRO DEL CURUGUATY', departamento: 18 },
    { codigo: 198, descripcion: 'VILLA YGATIMI', departamento: 18 },
    { codigo: 199, descripcion: 'YPEJHU', departamento: 18 },
    { codigo: 200, descripcion: 'CORPUS CHRISTI', departamento: 18 },
    { codigo: 201, descripcion: 'ITANARA', departamento: 18 },
    {
      codigo: 202,
      descripcion: 'FRANCISCO CABALLERO ALVAREZ',
      departamento: 18,
    },
    { codigo: 207, descripcion: 'SALTO DEL GUAIRA', departamento: 18 },
    { codigo: 235, descripcion: 'LA PALOMA', departamento: 18 },
    { codigo: 236, descripcion: 'KATUETE', departamento: 18 },
    { codigo: 238, descripcion: 'NUEVA ESPERANZA', departamento: 18 },
    { codigo: 241, descripcion: 'YASY KAÑY', departamento: 18 },
    { codigo: 271, descripcion: 'YBYRAROBANA', departamento: 18 },
    { codigo: 274, descripcion: 'YBY PYTA', departamento: 18 },
    { codigo: 283, descripcion: 'MARACANA', departamento: 18 },
    { codigo: 284, descripcion: 'PUERTO ADELA', departamento: 18 },
  ]

  departamentos = [
    { codigo: 17, descripcion: 'ALTO PARAGUAY' },
    { codigo: 11, descripcion: 'ALTO PARANA' },
    { codigo: 14, descripcion: 'AMAMBAY' },
    { codigo: 16, descripcion: 'BOQUERON' },
    { codigo: 6, descripcion: 'CAAGUAZU' },
    { codigo: 7, descripcion: 'CAAZAPA' },
    { codigo: 18, descripcion: 'CANINDEYU' },
    { codigo: 1, descripcion: 'CAPITAL' },
    { codigo: 12, descripcion: 'CENTRAL' },
    { codigo: 2, descripcion: 'CONCEPCION' },
    { codigo: 4, descripcion: 'CORDILLERA' },
    { codigo: 5, descripcion: 'GUAIRA' },
    { codigo: 8, descripcion: 'ITAPUA' },
    { codigo: 9, descripcion: 'MISIONES' },
    { codigo: 13, descripcion: 'NEEMBUCU' },
    { codigo: 10, descripcion: 'PARAGUARI' },
    { codigo: 15, descripcion: 'PTE. HAYES' },
    { codigo: 3, descripcion: 'SAN PEDRO' },
  ]

  validateDepartamentoDistritoCiudad(
    field: string,
    departamentoId: number,
    distritoId: number,
    ciudadId: number,
    errores: Array<string>,
  ) {
    if (ciudadId) {
      let distritoCiudadId: any = this.ciudades.filter(
        (td) => td.codigo === ciudadId,
      )

      if (
        distritoCiudadId &&
        distritoCiudadId[0] &&
        distritoCiudadId[0].distrito
      ) {
        distritoCiudadId = distritoCiudadId[0].distrito
      }

      if (distritoId != distritoCiudadId) {
        errores.push(
          'El distrito (' +
            distritoId +
            ') pasado no pertenece a la Ciudad (' +
            ciudadId +
            ') especificada en ' +
            field +
            '.distrito',
        )
      }
    }

    if (distritoId) {
      let departamentoDistritoId: any = this.distritos.filter(
        (td) => td.codigo === distritoId,
      )

      if (
        departamentoDistritoId &&
        departamentoDistritoId[0] &&
        departamentoDistritoId[0].departamento
      ) {
        departamentoDistritoId = departamentoDistritoId[0].departamento
      }

      if (departamentoId != departamentoDistritoId) {
        errores.push(
          'El departamento (' +
            departamentoId +
            ') pasado no pertenece al Distrito (' +
            distritoId +
            ') especificado en ' +
            field +
            '.departamento',
        )
      }
    }
  }
}

export default new ConstanteService()
