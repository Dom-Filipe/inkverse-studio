// Dados de contato do estúdio — altere aqui e o site inteiro é atualizado.
// TODO: substituir pelo WhatsApp e Instagram reais do estúdio.
const whatsappNumber = '5511999999999';

export const site = {
  name: 'Inkverse Studio',
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vim pelo site e gostaria de fazer um orçamento de tatuagem.'
  )}`,
  instagramHandle: 'seu_instagram',
  instagramUrl: 'https://instagram.com/seu_instagram',
  address: {
    street: 'Rua Hebert Silva, nº 29',
    city: 'Praia Grande - SP',
  },
  // TODO: preencher com o horário real, ex.: ['Ter a Sáb: 10h às 20h'].
  // Enquanto estiver vazio, o horário não aparece no rodapé.
  hours: [],
};
