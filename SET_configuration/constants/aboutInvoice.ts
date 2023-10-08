import { DOCUMENT_TYPE } from './documentType'
import { CITIES } from './cities'
import { COIN_TYPES } from './coinType'
import { REGIMEN_TYPE } from './regimenType'
import { TAX_TYPE } from './taxType'
import { CONDITION_TYPES_PAYMENTS } from './conditionsTypesPayments'
import { MEASUREMENT_UNITS } from './measurementUnits'
import { COUNTRIES } from './countries'
import { DISTRICTS } from './districts'
import { DEPARTMENTS } from './departments'
import { TAXPAYER_TYPE } from './taxpayerType'

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

  tiposImpuestos = TAX_TYPE

  monedas = COIN_TYPES

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

  tiposRegimenes = REGIMEN_TYPE

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

  tipoReceptor = TAXPAYER_TYPE

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

  condicionesTiposPagos = CONDITION_TYPES_PAYMENTS

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

  unidadesMedidas = MEASUREMENT_UNITS

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

  paises = COUNTRIES

  ciudades = CITIES

  distritos = DISTRICTS

  departamentos = DEPARTMENTS
}

export default new ConstanteService()
