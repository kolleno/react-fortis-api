/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BusinessCategoryEnum
 */
export enum BusinessCategoryEnum {
  BeautyAndPersonalCare = 'beauty_and_personal_care',
  CasualUse = 'casual_use',
  Education = 'education',
  FoodAndDrink = 'food_and_drink',
  HealthCareAndFitness = 'health_care_and_fitness',
  HomeAndRepair = 'home_and_repair',
  LeisureAndEntertainment = 'leisure_and_entertainment',
  NonProfit = 'non_profit',
  ProfessionalServices = 'professional_services',
  Retail = 'retail',
  Transportation = 'transportation',
}

/**
 * Schema for BusinessCategoryEnum
 */
export const businessCategoryEnumSchema: Schema<BusinessCategoryEnum> = stringEnum(
  BusinessCategoryEnum
);
