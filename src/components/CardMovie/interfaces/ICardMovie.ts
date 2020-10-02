import IMovie from '../../../interfaces/IMovie';

export default interface ICardMovie {
    data: IMovie;
    action(value: number | undefined): void;
}
