import IMovie from '../interfaces/IMovie';

export function getSectionItems(data: IMovie[]) {
    let arrSlice: any;

    if (data.length > 5) {
        arrSlice = data.slice(0, -(data.length - 5));

        return { sectionItem: arrSlice };
    }

    return { sectionItem: arrSlice };
}
