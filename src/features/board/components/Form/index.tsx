import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '@app/hooks/useAppDispatch';
import Button from '@components/Button';
import Input from '@components/Input';
import { addItem, editItem } from '@features/board/slice';
import { FormType } from '@features/board/types';
import { ModalStateType } from '@features/modal/types';

type FormProps = {
    type: ModalStateType;
    editState?: FormType | null;
    onClose: () => void;
};

const Form: FC<FormProps> = ({ type, editState, onClose }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormType>();

    useEffect(() => {
        if (editState) {
            setValue('title', editState.title || '');
            setValue('description', editState.description || '');
            setValue('date', editState.date || '');
        }
    }, [editState, setValue]);

    const onSubmitForm: SubmitHandler<FormType> = (formData) => {
        if (type === ModalStateType.New) {
            dispatch(addItem({ ...formData, id: uuidv4() }));
        } else if (type === ModalStateType.Edit && editState) {
            dispatch(editItem({ id: editState.id, updates: { ...formData } }));
        }
        onClose();
    };

    const getTodayDate = (): string => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="BS-form w100">
            <Input
                type="text"
                placeholder={t('title')}
                sizeType="small"
                error={errors?.title?.message}
                className={errors?.title ? 'BG-input--error-field' : ''}
                {...register('title', { required: 'Title is required' })}
            />

            <Input
                type="text"
                placeholder={t('description')}
                sizeType="small"
                className="mt-16"
                {...register('description')}
            />
            <Input type="date" sizeType="small" className="mt-16" {...register('date')} min={getTodayDate()} />
            <Button type="submit" size="small" className="mt-28" isFullWidth>
                {t('save')}
            </Button>
        </form>
    );
};

export default Form;
