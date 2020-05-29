import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailabity: ListProviderMonthAvailabityService;

describe('ListProviderMonthAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailabity = new ListProviderMonthAvailabityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list providers availables in the month', async () => {
    const promissesCreateAppointmentInBusinessHours = Array.from(
      { length: 10 },
      (_, index) => {
        return fakeAppointmentsRepository.create({
          provider_id: 'user',
          date: new Date(2020, 3, 20, index + 8, 0, 0),
        });
      },
    );

    await Promise.all(promissesCreateAppointmentInBusinessHours);

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 3, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailabity.execute({
      provider_id: 'user',
      year: 2020,
      month: 4,
    });

    await expect(availability).toEqual(
      expect.arrayContaining([
        {
          day: 19,
          available: true,
        },
        {
          day: 20,
          available: false,
        },
        {
          day: 21,
          available: true,
        },
        {
          day: 22,
          available: true,
        },
      ]),
    );
  });
});
