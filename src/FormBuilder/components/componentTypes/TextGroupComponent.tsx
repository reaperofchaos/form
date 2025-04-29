import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import { useState, useEffect, useMemo, SyntheticEvent } from 'react';
import { FormActionType, useFormProvider } from '../../provider';
import { DropdownProps, Optional } from '../../../utils';
import { Answer, Field, FieldType, TextComponentProps, TextGroupComponentProps } from '../../types';
import TextComponent from './TextComponent';

const TextGroupComponent = (props: TextGroupComponentProps) => {
    const id = props.id;
    const {useSelector, dispatch} = useFormProvider();
    const value = useSelector((state)=>state.answers?.[id]);
  

    const handleAdd = (event: SyntheticEvent<Element, Event>, currentvalue: Answer<FieldType.TEXT>, index: number)=>{
        
      let array = value;
      if(!array){
        array = []; 
        
      }
      if(array.length > index){
        array[index] = currentvalue;
      }

      if(array.length <= index){
        array.push(currentvalue)
      }
      dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: array}})
    }

    const handleRemove = (event: SyntheticEvent<Element, Event>, currentvalue: Answer<FieldType.TEXT>, index: number)=>{
        
      let array = value;
      if(!array){
        array = []; 
      }

      if(array.length > index){
        array[index] = currentvalue;
      }

      if(array.length <= index){
        array.push(currentvalue)
      }
      dispatch({type: FormActionType.SET_AN_ANSWER, payload: {key: id, value: array}})
    }


        
  const [dropdownValues, setDropdownValues] = useState<string[] | number[]>(
    value ?? [],
  );

  const [textButtons, setTextButtons] = useState<
    TextComponentProps[]
  >([]);

  // useEffect(()=>{
  //   if(textButtons.length != value.length){
  //     const textButtonProps: TextComponentProps[] = value.map((v as Answer<FieldType.TEXT>)=>({
  //       value: v,

  //     }));

  //     setTextButtons(textButtonProps)
  //   }
  // })

  // const updateValues = (updatedValues: string[] | number[]) => {
  //   if (onChange) {
  //     onChange({ [columnName]: updatedValues });
  //   }
  // };

  // /**
  //  * Sets the value for an autocomplete
  //  * @param index
  //  * @param valueToAdd
  //  */
  // const addValue = (
  //   index: number,
  //   valueToAdd: string | number | undefined | null,
  // ) => {
  //   let updatedValues: string[] | number[] = dropdownValues
  //     ? _.cloneDeep(dropdownValues)
  //     : [];

  //   if (valueToAdd) {
  //     // @ts-ignore
  //     updatedValues =
  //       utilHelpers.arrayHelpers.addElementAtIndex(
  //         updatedValues,
  //         index,
  //         valueToAdd,
  //       ) ?? updatedValues;

  //     setDropdownValues(updatedValues);
  //     updateValues(updatedValues);
  //   }
  // };

  /**
   * Removes the value and dropdown for an autocomplete at a
   * given index
   * @param index
   */
  // const removeValue = (index: number) => {
  //   const updatedValues: string[] | number[] = dropdownValues
  //     ? _.cloneDeep(dropdownValues)
  //     : [];
  //   const updatedOptions: DropdownProps[][] = dropDownOptions
  //     ? _.cloneDeep(dropDownOptions)
  //     : [];

  //   // @ts-ignore
  //   const found = arrayHelpers.getElementFromIndex(updatedOptions, index);

  //   if (found !== undefined) {
  //     updatedValues.splice(index, 1);
  //     updatedOptions.splice(index, 1);

  //     setDropDownOptions(updatedOptions);
  //     setDropdownValues(updatedValues);
  //     updateValues(updatedValues);
  //   }
  // };

  // /**
  //  * Adds a new autocomplete
  //  * @param index
  //  */
  // const addTextField = (index: number) => {
  //   const updatedOptions: DropdownProps[][] = dropDownOptions
  //     ? _.cloneDeep(dropDownOptions)
  //     : [];
  //   const lastDropdownOptions: DropdownProps[] =
  //     utilHelpers.arrayHelpers.getElementFromIndex(
  //       updatedOptions,
  //       updatedOptions.length - 1,
  //     ) ?? [];
  //   const newDropdownOptions = lastDropdownOptions.filter(
  //     // @ts-ignore
  //     (option) => value && option?.value && !value.includes(option.value),
  //   );

  //   if (index < options.length) {
  //     updatedOptions.push(newDropdownOptions);
  //   }

  //   setDropDownOptions(updatedOptions);
  // };

  // useEffect(() => {
  //   if (options) {
  //     const updatedFieldOptions: DropdownProps[][] = [];

  //     // there is always at least one dropdown, so setting that regardless of number of set then condition values
  //     updatedFieldOptions.push(options);

  //     if (dropdownValues.length > 0) {
  //       // remove options from index
  //       let a = 1;

  //       while (a < dropdownValues.length) {
  //         updatedFieldOptions.push(options);
  //         a += 1;
  //       }

  //       for (let i = 0; i < dropdownValues.length; i += 1) {
  //         const optionForIndex = updatedFieldOptions[i].filter(
  //           (option) =>
  //             // @ts-ignore
  //             !dropdownValues.slice(0, i).includes(option.value),
  //         );

  //         updatedFieldOptions[i] = optionForIndex;
  //       }
  //     }

  //     setDropDownOptions(updatedFieldOptions);
  //   }
  // }, [options, setDropDownOptions, dropdownValues]);


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '10px',
        rowGap: '20px',
      }}
    >
      {/* {textButtons.map((_dropdownFields, index) => (
        
        <TextComponent
          key={nanoid()}
          customOnChange={handleAdd}
          index={index}
          values={dropdownValues}
          addValue={addValue}
          removeValue={removeValue}
        />
      ))} */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          width: '100%',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            border: 'none',
            textTransform: 'none',
            ...((value.length === textButtons.length ||
              value.length === 1) && {
              display: 'none',
            }),
          }}
          disabled={value.length !== textButtons.length}
          // onClick={() => addTextField(textButtons.length)}
        >
          <Typography variant="h6">Add</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default TextGroupComponent;
