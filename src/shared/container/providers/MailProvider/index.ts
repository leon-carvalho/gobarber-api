import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

export default {
  etherealMailProvider: EtherealMailProvider,
  ses: SESMailProvider,
};
