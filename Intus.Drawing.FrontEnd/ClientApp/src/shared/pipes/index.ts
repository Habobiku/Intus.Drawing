import { DecapitalizePipe } from './decapitalize.pipe';
import { RelativeTimePipe } from './relative-time.pipe';
import { TruncatePipe } from './truncate.pipe';
import { TimeDecimalHoursPipe, TimeHoursPipe, TimePipe } from './time.pipe';

export const pipes = [
    DecapitalizePipe,
    RelativeTimePipe,
    TruncatePipe,
    TimePipe,
    TimeHoursPipe,
    TimeDecimalHoursPipe,
];
