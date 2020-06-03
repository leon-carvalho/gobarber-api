import { injectable, inject } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    const cacheKey = `provider-appointments:${provider_id}:${year}-${month}-${day}`;

    let appointments = await this.cacheProvider.recover<Appointment[]>(
      cacheKey,
    );

    if (!appointments) {
      appointments = await this.appointmentsRepository.findAllInDayFromProvider(
        {
          provider_id,
          day,
          month,
          year,
        },
      );

      await this.cacheProvider.save(cacheKey, classToClass(appointments));
    }

    return appointments;
  }
}

export default ListProviderAppointmentsService;

// import { injectable, inject } from 'tsyringe';

// import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
// import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
// import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
// import { classToClass } from 'class-transformer';

// interface IRequest {
//   provider_id: string;
//   day: number;
//   month: number;
//   year: number;
// }

// @injectable()
// class ListProviderMonthAvailabilityService {
//   private appointmentsRepository: IAppointmentsRepository;

//   private cacheProvider: ICacheProvider;

//   constructor(
//     @inject('AppointmentsRepository')
//     appointmentsRepository: IAppointmentsRepository,

//     @inject('CacheProvider')
//     cacheProvider: ICacheProvider,
//   ) {
//     this.appointmentsRepository = appointmentsRepository;
//     this.cacheProvider = cacheProvider;
//   }

//   public async execute({
//     provider_id,
//     day,
//     month,
//     year,
//   }: IRequest): Promise<Appointment[]> {
//     let appointments = await this.cacheProvider.recover<Appointment[]>(
//       `provider-appointments:${provider_id}:${day}-${month}-${year}`,
//     );

//     if (!appointments) {
//       appointments = await this.appointmentsRepository.findAllInDayFromProvider(
//         {
//           provider_id,
//           day,
//           month,
//           year,
//         },
//       );

//       await this.cacheProvider.save(
//         `provider-appointments:${provider_id}:${day}-${month}-${year}`,
//         classToClass(appointments),
//       );
//     }

//     return appointments;
//   }
// }

// export default ListProviderMonthAvailabilityService;
